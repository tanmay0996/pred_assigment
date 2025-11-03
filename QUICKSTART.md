# Quick Start Guide

Get the Trading Mobile UI running in 60 seconds.

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open browser to `http://localhost:5173`

## View Components

```bash
npm run storybook
```

Open browser to `http://localhost:6006`

## Build for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Change Colors

Edit `src/index.css` (lines 6-13):

```css
:root {
  --bg-base: #0a0a0a;          /* Change page background */
  --panel-bg: #1a1a1a;         /* Change card backgrounds */
  --muted: #666666;            /* Change secondary text */
  --text-primary: #ffffff;     /* Change main text */
  --accent-green: #7ed321;     /* Change primary action color */
  --accent-red: #ff4444;       /* Change danger color */
  --accent-highlight: #ff6b35; /* Change highlight color */
}
```

Save and refresh - colors update instantly.

## Project Structure

```
src/
├── components/          All UI components
│   ├── TradeScreen.tsx    Main screen
│   ├── OrderPanel.tsx     Order entry
│   ├── PositionsPanel.tsx Positions list
│   └── *.stories.tsx      Storybook stories
├── theme.ts             Color definitions
├── index.css            Global styles
└── App.tsx              App wrapper
```

## Key Features

- ✅ Long/Short toggle
- ✅ Market/Limit price dropdown
- ✅ USDC/Shares dropdown
- ✅ Percentage buttons (25%, 50%, 100%)
- ✅ Position close with animation
- ✅ Animated Earn Rewards button
- ✅ Fully responsive mobile UI

## Testing Interactions

1. **Toggle Long/Short** - Click buttons at top of OrderPanel
2. **Change price type** - Click "Market Price" dropdown
3. **Quick amounts** - Click 25%, 50%, or 100%
4. **Close position** - Click "Market close" or "Limit close"

## Documentation

- `README.md` - Full documentation
- `COLORS_GUIDE.md` - How to change colors
- `IMPLEMENTATION_GUIDE.md` - Technical details

## Mobile Preview

For pixel-perfect mobile view:

1. Open `http://localhost:5173/mobile-preview.html`
2. Or use browser DevTools mobile emulation (375px width)

## Need Help?

Check the documentation files above or examine the components in Storybook.

---

That's it! You're ready to go. 🚀
