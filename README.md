# GYWDE Landing Page - Intern Guide 🚀

Welcome to the GYWDE Landing Page project! This guide will help you understand the project structure and get you up to speed quickly.

## Getting Started

### Prerequisites

- Node.js (version 20.19+ or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SmartApproaches/GYWDE-Landing-Page.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd GYWDE-Landing-Page
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser** Navigate to http://localhost:5173 (Vite's default port)

## 📁 Project Structure

Here's what each folder and file does:

### 📂 **src/** - Main source code

- **components/** - Reusable UI components (buttons, cards, navigation, etc.)
- **constants/** - Static data like text content, configuration etc.
- **constants/images** - Exports image paths or imports for use across the application
- **hooks/** - Custom React hooks for reusable logic
- **pages/** - Individual page components (Home, About, Contact, etc.)
- **utils/** - Helper functions and utilities
- **assets/** - Images, icons, fonts, and other static files

### 📂 **public/** - Static files served directly

- Files here are accessible at the root URL (e.g., `/favicon.ico`)

### 📂 **node_modules/** - Dependencies

- Don't touch this! It's automatically managed by npm

### 🔧 **Configuration Files**

- **App.css** - Main app styles
- **App.jsx** - Main app component with routing
- **index.css** - Global styles and Tailwind configuration
- **main.jsx** - App entry point
- **package.json** - Project dependencies and scripts
- **vite.config.js** - Vite bundler configuration
- **.gitignore** - Files to ignore in version control

## 📦 Installed Packages

### Core Dependencies

- **React** - Frontend framework
- **React Router DOM** - For navigation between pages
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

### Example Usage:

```jsx
// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// React Icons
import { FaHome, FaUser, FaEnvelope } from "react-icons/fa";

// Framer Motion
import { motion } from "framer-motion";
```

## 🎨 Styling with Tailwind CSS

**Important:** All Tailwind customization is done directly in `index.css`.

### How to Add Custom Styles:

1. **Global Styles** - Add to the root section:

```css
:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  /* Add global CSS variables here */
}
```

2. **Custom Colors** - Add to the `@theme` section:

```css
@theme {
  /* Custom Colors */
  --color-main-bg: #ffffff;
  --color-primary: #14b66d;
  --color-primary-hover: #0f9a5b;
  --color-secondary: #your-color-here;

  /* Custom Fonts */
  --font-brand: "Your Font Name", sans-serif;

  /* Custom Spacing */
  --spacing-custom: 2.5rem;
}
```

3. **Use in Components:**

```jsx
// Use custom colors
<div className="bg-main-bg text-primary hover:text-primary-hover">
  Content here
</div>

// Use custom fonts
<h1 className="font-brand">Brand Title</h1>
```

## 🏗️ Component Structure

### Creating New Components:

1. Create a new file in `src/components/`
2. Use PascalCase for component names (e.g., `NavigationBar.jsx`)
3. Export as default

```jsx
// src/components/MyComponent.jsx
import { motion } from "framer-motion";
import { FaIcon } from "react-icons/fa";

const MyComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-primary text-white p-4"
    >
      <FaIcon className="text-2xl" />
      <p>Component content</p>
    </motion.div>
  );
};

export default MyComponent;
```

## 🛠️ Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## 🌿 Git Workflow

### Working on New Features/Fixes:

**Always work on a separate branch!** Never push directly to `main`.

1. **Create and switch to a new branch:**

```bash
# For newly assigned Jira tickets
git checkout -b <JIRA_TICKET_NUMBER>

# For other tasks (use conventional naming)
git checkout -b feature/user-authentication
git checkout -b fix/navigation-bug
```

2. **Make your changes and commit:**

```bash
git add .

# For newly assigned Jira tickets - use the ticket description
git commit -m "Develop UI and implement end point of customer service webapp"

# For other tasks - use conventional commits
git commit -m "feat: add user authentication system"
git commit -m "fix: resolve navigation menu mobile responsiveness"
```

3. **Push your branch:**

```bash
git push origin GYWDENEW-0123 # Replace with your actual ticket number
# or
git push origin feature/user-authentication
```

4. **Open a Pull Request (PR)** and tag the reviewers

### Branch Naming Convention:

- **Jira Tickets**: `GYWDENEW-0123` (use exact Jira ticket number, can be gotten from Jira)
- **Other Tasks**:
  - `feature/task-name` - For new features
  - `fix/bug-description` - For bug fixes
  - `chore/task-description` - For maintenance tasks
  - `docs/update-description` - For documentation updates

**For Jira Tickets:**
Use the exact ticket description from Jira:

```bash
git commit -m "Develop UI and implement end point of customer service webapp"
git commit -m "Create responsive navigation component for mobile devices"
git commit -m "Implement user authentication with JWT tokens"
```

**For Other Tasks:**
Use conventional commit types:

- `feat` - A new feature
- `fix` - A bug fix
- `docs` - Documentation only changes
- `style` - Changes that don't affect code meaning (white-space, formatting, etc.)
- `refactor` - Code change that neither fixes a bug nor adds a feature
- `test` - Adding missing tests or correcting existing tests
- `chore` - Changes to build process or auxiliary tools

**Examples:**

```bash
git commit -m "feat: add login functionality"
git commit -m "fix: resolve navigation menu mobile responsiveness"
git commit -m "docs: update README with new setup instructions"
git commit -m "style: format code with prettier"
git commit -m "refactor: optimize image loading performance"
```

### Complete Git Workflow Examples:

**For Jira Tickets:**

```bash
# 1. Start from main and pull latest changes
git checkout main
git pull origin main

# 2. Create new branch with Jira ticket number
git checkout -b GYWDENEW-0123  # Replace with your actual ticket number

# 3. Make your changes, then stage and commit with the Jira ticket description
git add .
git commit -m "Develop UI of homepage of landing page"

# 4. Push branch to remote
git push origin GYWDENEW-0123  # Replace with your actual ticket number

# 5. Open PR on GitHub and tag the reviewers
```

**For Other Tasks:**

```bash
# 1. Start from main and pull latest changes
git checkout main
git pull origin main

# 2. Create new branch with descriptive name
git checkout -b feature/user-dashboard

# 3. Make your changes, then stage and commit with conventional format
git add .
git commit -m "feat: implement user dashboard with profile section"

# 4. Push branch to remote
git push origin feature/user-dashboard

# 5. Open PR on GitHub and tag reviewers
```

## 💡 Tips

1. **Start Small** - Begin by exploring the project structure and understanding the codebase
2. **Use Tailwind** - Prefer Tailwind classes over custom CSS when possible
3. **Component Reusability** - If you use similar code twice, make it a component
4. **Icons** - Use React Icons instead of image files for better performance
5. **Animations** - Use Framer Motion for smooth animations
6. **File Organization** - Keep related files together and use descriptive names
7. **Branch First** - Always create a new branch before starting work
8. **Page Structure** - Use the folder structure for pages: `pages/pageName/`
9. **Page-Specific Components** - Place components unique to a page in `pages/pageName/_component/ComponentName`
10. **Commit Often** - Make small, focused commits with clear messages
11. **Ask Questions** - Don't hesitate to ask for help or clarification

## 🚨 Common Mistakes to Avoid

- ❌ Don't create a `tailwind.config.js` file - use `index.css` instead
- ❌ Don't put images in `src/` root - use `src/assets/images` for static assets
- ❌ Don't use PNG or JPEG for images - prefer SVG for better scalability and performance
- ❌ Don't import entire icon libraries - import specific icons only
- ❌ Don't forget to add your custom colors to the `@theme` section
- ❌ **Never push directly to `main`** - always work on a separate branch
- ❌ Don't write vague commit messages - be specific and follow conventional commits
- ❌ Don't mix different types of changes in one commit
- ❌ Don't forget to pull latest changes from `main` before creating a new branch

## 📚 Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Icons Search](https://react-icons.github.io/react-icons/)
- [React Router Documentation](https://reactrouter.com/)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#specification)

## 🤝 Need Help?

If you're stuck or have questions:

1. Make the necessary research.
2. Read the documentation links above
3. Ask your mentors.
4. Use the browser developer tools to debug

Happy coding! 🎉