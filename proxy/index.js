const SECRET_SLUG = process.env.SECRET_SLUG;

export const proxy = async (req, res) => {
  res.set(
    'Access-Control-Allow-Origin',
    process.env.NODE_ENV === 'production' ? 'https://goit-neo-react-hw-module7-phi-lime.vercel.app' : '*'
  );
  res.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  res.set('Accept-Version', 'v1');

  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  try {
    const path = req.url;
    const method = req.method;
    const queryParams = new URLSearchParams(req.query);
    const url = `https://${SECRET_SLUG}.mockapi.io/api/v1${path}?${queryParams}`;

    console.log(`Fetching from: ${url}?${queryParams}`);

    const headers = {
      'Content-Type': 'application/json',
    };

    const response = await fetch(url, { method, headers });
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching from IMDB');
  }
};
