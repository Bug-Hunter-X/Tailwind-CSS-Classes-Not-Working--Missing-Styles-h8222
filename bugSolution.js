```javascript
// Import necessary modules
import React from 'react';
// ... other imports

// Your component
const MyComponent = () => {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">My Component</h1>
      <p className="text-gray-700">This is some text.</p>
    </div>
  );
};

export default MyComponent;
```

**Make sure to install Tailwind and follow their setup instructions for your project. This will often involve:**

1. Installing Tailwind CSS:
   ```bash
npm install -D tailwindcss postcss autoprefixer
```
2. Generating the Tailwind CSS configuration file:
   ```bash
tailwindcss init
```
3. Adding Tailwind directives to your CSS file (e.g., `tailwind.css`):
4. Configuring your build process (e.g., Webpack, Vite) to include Tailwind CSS.  This typically involves adding the Tailwind CSS plugin.