# Phonebook App

A React-based contact management application that allows users to store, search, and manage their contacts. This project is part of the GoIT React course homework (Module 6).

## 🚀 Features

- **Contact Management**: Add new contacts with name and phone number
- **Form Validation**: Input validation using Formik and Yup schemas
- **Search Functionality**: Real-time search through contacts by name
- **Contact Deletion**: Remove contacts from the phonebook
- **Data Persistence**: Contact data is saved using redux-persist and persists across browser sessions
- **Responsive Design**: Clean, modern interface with CSS modules

## 🛠️ Technologies Used

- **React 19.1.0** - Modern React with hooks
- **Redux Toolkit** - State management
- **React Redux** - Redux bindings for React
- **redux-persist** - State persistence
- **Vite 7.0.4** - Fast build tool and development server
- **Formik 2.4.6** - Form handling and validation
- **Yup 1.7.0** - Schema validation library
- **CSS Modules** - Scoped styling for components
- **ESLint** - Code linting and formatting

## 📁 Project Structure

```
src/
├── App.jsx                 # Main application component
├── app.module.css          # Global application styles
├── main.jsx                # Application entry point
├── index.css               # Base styles
├── libs/
│   └── classnames.js       # Utility for conditional CSS classes
├── redux/
│   ├── store.js            # Redux store setup with redux-persist
│   ├── contactsSlice.js    # Contacts state slice
│   ├── filtersSlice.js     # Filter state slice
│   └── useData.js          # Custom hooks for accessing and manipulating state
├── components/
│   ├── Contact/            # Individual contact display component
│   ├── ContactForm/        # Contact creation form with validation
│   │   └── validationSchema.js # Yup validation schema
│   ├── ContactList/        # List of all contacts
│   └── SearchBox/          # Search functionality component
```

## 🎯 How It Works

1. **Add Contacts**: Fill out the form with a name and phone number to add new contacts
2. **Form Validation**: The form uses Yup validation schema to ensure:
   - Name field is required and must be at least 3 characters
   - Phone number field is required and follows the pattern XXX-X-XX
3. **Search Contacts**: Use the search box to filter contacts by name in real-time
4. **Delete Contacts**: Click the delete button next to any contact to remove it
5. **Data Persistence**: All contact data is automatically saved using redux-persist

## 🚀 Getting Started

### Prerequisites

- Node.js (version 20 or higher)
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd goit-neo-react-hw-module6
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