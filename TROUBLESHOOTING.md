# Troubleshooting Guide

## Network Error in Chat

If you're getting "Network error, please try again" when using the AI chat, follow these steps:

### 1. Verify API Key is Loaded

1. Open your browser's Developer Console (F12)
2. Look for the log message: `API Key Status: Loaded (AIzaSyAb8R...)`
3. If you see `API Key Status: MISSING`, your API key is not loaded

### 2. Check .env.local File

Make sure your `.env.local` file exists in the root directory and contains:

```
VITE_GEMINI_API_KEY=AIzaSyAb8RN6IIUqeyxuFWIxDDcOW9-Q-_37tzsWZDRzxvXM
```

**Important:** Vite only reads `.env` files at build time!

### 3. Restart the Development Server

After creating or modifying `.env.local`:

```bash
# Stop the server (Ctrl+C)
# Then restart:
npm run dev
```

### 4. Clear Browser Cache

1. Open Developer Console (F12)
2. Right-click the refresh button
3. Select "Empty Cache and Hard Reload"

### 5. Check API Key Validity

1. Go to https://aistudio.google.com/app/apikey
2. Verify your API key is active
3. Check if there are any usage limits or restrictions

### 6. Check Network Connection

1. Make sure you have internet connection
2. Check if you're behind a firewall or proxy
3. Try disabling VPN if you're using one

### 7. Check Console for Detailed Errors

Open browser console and look for detailed error logs:
- `API Call Error Details:` - Shows specific error from Gemini API
- `getChatResponse Final Error:` - Shows the final error message

### Common Error Messages

**"API Key is missing"**
- Solution: Add API key to `.env.local` and restart dev server

**"Network connection failed"**
- Solution: Check internet connection, firewall, or VPN settings

**"Too many requests"** (429 error)
- Solution: Wait a few minutes before trying again

**"AI Service is temporarily busy"** (503 error)
- Solution: Retry after a few seconds (automatic retry is enabled)

### Still Having Issues?

1. Check the browser console for the exact error message
2. Verify the API key is correct and has no extra spaces
3. Try creating a new API key from Google AI Studio
4. Make sure the model name "gemini-2.5-flash" is available in your region

## Testing the API Key

Open browser console and run:

```javascript
console.log(import.meta.env.VITE_GEMINI_API_KEY);
```

If this shows `undefined`, your `.env.local` file is not being loaded correctly.
