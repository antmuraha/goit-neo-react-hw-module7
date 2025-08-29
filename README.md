# Phonebook App

This is a React-based contact management application that allows users to store, search, and manage their contacts. The backend API is accessed via a custom proxy server (Google Cloud Function or local Express server) to bypass CORS and secure API keys. This project is part of the GoIT React course homework (Module 7).

## 🚀 Features

- **Contact Management**: Add new contacts with name and phone number
- **Form Validation**: Input validation using Formik and Yup schemas
- **Search Functionality**: Real-time search through contacts by name
- **Contact Deletion**: Remove contacts from the phonebook
- **Data Persistence**: Contact data is managed through the API backend and synchronized via Redux state
- **Responsive Design**: Clean, modern interface with CSS modules
- **API Proxy**: All API requests are routed through a proxy server (local or cloud function)

## 🛠️ Technologies Used

- **React 19.1.0** - Modern React with hooks
- **Redux Toolkit** - State management
- **React Redux** - Redux bindings for React
- **Vite 7.0.4** - Fast build tool and development server
- **Formik 2.4.6** - Form handling and validation
- **Yup 1.7.0** - Schema validation library
- **CSS Modules** - Scoped styling for components
- **ESLint** - Code linting and formatting
- **Express** (for local proxy)
- **Google Cloud Functions** (for deployed proxy)

## 📁 Project Structure

The project is organized into two main parts:

### Frontend (`src/`)

```
src/
├── App.jsx                 # Main application component
├── app.module.css          # Global application styles
├── main.jsx                # Application entry point
├── index.css               # Base styles
├── assets/                 # Static assets (currently empty)
├── libs/
│   └── classnames.js       # Utility for conditional CSS classes
├── redux/
│   ├── contactsOps.js      # Async operations for contacts (API calls)
│   ├── contactsSlice.js    # Contacts state slice
│   ├── filtersSlice.js     # Filter state slice
│   ├── store.js            # Redux store setup
│   └── useData.js          # Custom hooks for accessing and manipulating state
├── components/
│   ├── Contact/            # Individual contact display component
│   ├── ContactForm/        # Contact creation form with validation
│   │   └── validationSchema.js # Yup validation schema
│   ├── ContactList/        # List of all contacts
│   └── SearchBox/          # Search functionality component
```

### Proxy Server (`proxy/`)

```
proxy/
├── .env                    # Local environment variables
├── .env.example            # Example environment file
├── .gcloudignore           # Files to ignore for Google Cloud
├── .gitignore              # Files to ignore for git
├── .nvmrc                  # Node version config
├── index.js                # Proxy function for API requests (Google Cloud Function)
├── local/
│   └── server.js           # Express server for local proxy
├── package.json            # Proxy dependencies
├── pnpm-lock.yaml          # Proxy lock file
├── readme.md               # Proxy deployment and usage guide
```

## 🎯 How It Works

1. **Add Contacts**: Fill out the form with a name and phone number to add new contacts
2. **Form Validation**: The form uses Yup validation schema to ensure:
   - Name field is required and must be at least 3 characters
   - Phone number field is required and follows the pattern XXX-X-XX
3. **Search Contacts**: Use the search box to filter contacts by name in real-time
4. **Delete Contacts**: Click the delete button next to any contact to remove it
5. **Data Persistence**: All contact data is automatically saved using redux-persist
6. **API Proxy**: All API requests are routed through a proxy server. In development, requests go to the local Express server (`http://localhost:3000`). In production, requests go to the deployed Google Cloud Function.

## 🚀 Getting Started

### Prerequisites

- Node.js (version 20 or higher)
- pnpm (or npm/yarn)
- Google Cloud SDK (for deploying proxy)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd goit-neo-react-hw-module7
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm lint` - Run ESLint
- `pnpm preview` - Preview production build

## 🌐 API Proxy Usage & Deployment

All API requests from the React app are routed through a proxy server to avoid CORS issues and secure API keys.

### Local Development

1. Start the local proxy server:
   ```bash
   pnpm --filter ./proxy/local start
   # or
   node proxy/local/server.js
   ```
2. The React app will use `http://localhost:3000` for API requests.

### Cloud Deployment

1. Deploy the proxy as a Google Cloud Function:
   ```bash
   gcloud functions deploy proxy-mockapi --runtime nodejs20 --trigger-http --allow-unauthenticated --entry-point proxy --set-env-vars SECRET_SLUG=<your-mockapi-slug> --service-account=<your-service-account>
   ```
2. The React app will use the deployed function URL for API requests in production.

See `proxy/readme.md` for more details.

## 💡 Key Implementation Details

### State Management with Redux Toolkit

The application uses Redux Toolkit for state management, with slices for contacts and filters. State is persisted using redux-persist.

### Form Handling with Formik & Yup

- Formik manages form state and submission.
- Yup provides validation: name (min 3 chars), phone (format 123-45-67).

### Custom Hooks

Custom hooks in `src/redux/useData.js` provide logic for adding, deleting, and searching contacts, and connect components to Redux state.

### Component Architecture

- **Modular Design**: Each component has its own directory with JSX and CSS modules
- **Props-based Communication**: Data flows down through props
- **Controlled Components**: Form inputs are controlled by Formik state

### Data Persistence

- Contact data is automatically saved using redux-persist
- Data persists across browser sessions
### API Proxy

- All API requests are routed through a proxy server (local or cloud function)
- Proxy code is in `proxy/index.js` (for Google Cloud Function) and `proxy/local/server.js` (for local Express)
- See `proxy/readme.md` for deployment and usage instructions

## 🎨 Styling

The application uses CSS Modules for component-scoped styling, ensuring:
- No style conflicts between components
- Maintainable and organized CSS
- Clean, modern user interface

## 📝 Learning Objectives

This project demonstrates:
- React functional components and hooks
- Form handling with Formik
- Form validation with Yup
- State management in React with Redux Toolkit
- State persistence with redux-persist
- Component composition and reusability
- CSS Modules usage
- Event handling in React
- Conditional rendering
- Props passing and data flow
- Search and filter functionality

## 🤝 Contributing

This is a homework project for the GoIT React course. If you're also a student working on similar exercises, feel free to use this as a reference, but make sure to understand the concepts and implement your own solution.

## 📄 License

This project is created for educational purposes as part of the GoIT React course curriculum.