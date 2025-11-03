# Trading Mobile UI - Pixel Perfect Implementation

A pixel-perfect mobile trading interface built with React, TypeScript, and Tailwind CSS, matching the provided screenshot design exactly.

## Features

- **Pixel-perfect mobile UI** matching the reference screenshot
- **Long/Short trading toggle** with dynamic CTA button
- **Market/Limit price dropdown** with limit price input
- **USDC/Shares dropdown** for flexible trading
- **Percentage quick buttons** (25%, 50%, 100%) that calculate amounts dynamically
- **Live OrderBook** displaying price and shares
- **Positions management** with animated position removal
- **Animated "Earn Rewards" button** with moving border effect
- **Fully responsive** mobile-first design
- **Global color theme system** for easy customization

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Running the Application

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Running Storybook

To view and interact with individual components:

```bash
npm run storybook
```

Storybook will be available at `http://localhost:6006`

### Building for Production

```bash
npm run build
```

## Changing Color Variables

All colors in the application are controlled by CSS custom properties defined in a single location. To change the color scheme:

### Option 1: Edit CSS Variables (Recommended)

Open `src/index.css` and modify the CSS variables under `:root`:

```css
:root {
  --bg-base: #0a0a0a;          /* Page background */
  --panel-bg: #1a1a1a;         /* Card/panel background */
  --muted: #666666;            /* Muted text/separators */
  --text-primary: #ffffff;     /* Main text color */
  --accent-green: #7ed321;     /* Primary CTA/success */
  --accent-red: #ff4444;       /* Negative highlights */
  --accent-highlight: #ff6b35; /* Price highlight color */
}
```

### Option 2: Edit Theme Configuration

Open `src/theme.ts` and modify the `themeColors` object:

```typescript
export const themeColors = {
  '--bg-base': '#0a0a0a',
  '--panel-bg': '#1a1a1a',
  '--muted': '#666666',
  '--text-primary': '#ffffff',
  '--accent-green': '#7ed321',
  '--accent-red': '#ff4444',
  '--accent-highlight': '#ff6b35',
} as const;
```

These variables are automatically mapped to Tailwind classes in `tailwind.config.js`:

- `bg-base` → `var(--bg-base)`
- `panel-bg` → `var(--panel-bg)`
- `muted` → `var(--muted)`
- `text-primary` → `var(--text-primary)`
- `primary` → `var(--accent-green)`
- `danger` → `var(--accent-red)`
- `highlight` → `var(--accent-highlight)`

## Project Structure

```
src/
├── components/
│   ├── HeaderBar.tsx          # Top header with animated Earn Rewards button
│   ├── CategoryTabs.tsx       # Category filter tabs
│   ├── MarketCard.tsx         # Market info card component
│   ├── OrderPanel.tsx         # Order entry panel with Long/Short toggle
│   ├── OrderBook.tsx          # Live order book display
│   ├── PositionsPanel.tsx     # Positions list with close functionality
│   ├── FooterSection.tsx      # Footer with team selector
│   ├── NavigationBar.tsx      # Bottom navigation bar
│   ├── TradeScreen.tsx        # Main trading screen
│   ├── *.stories.tsx          # Storybook stories for components
├── theme.ts                    # Global theme configuration
├── index.css                   # Global styles and CSS variables
├── App.tsx                     # Main app component
└── main.tsx                    # App entry point
```

## Component Overview

### TradeScreen

The main screen component that composes all other components. Includes state management for positions and handles position closing.

### HeaderBar

- Logo/menu button
- EPL 2025 dropdown selector
- **Animated "Earn Rewards" button** with gradient border animation
- User profile button

### OrderPanel

Interactive order entry panel featuring:

- **Long/Buy and Short/Sell toggle**
- **Market Price / Limit Price dropdown** (shows limit price input when selected)
- **USDC / Shares dropdown** (changes input behavior)
- Amount input with +/- controls
- **Percentage quick buttons** (25%, 50%, 100%) that calculate from available balance
- Reduce only checkbox
- Dynamic CTA button (Long MANC / Short MANC)

### PositionsPanel

Tabbed panel with:

- Positions, Open orders, and Trade History tabs
- List of positions with gain/loss indicators
- **Market close and Limit close buttons**
- **Animated position removal** when closed

### OrderBook

Live order book displaying:

- Price column (left)
- Shares column (right)
- Scrollable list of orders

## Key Interactions

1. **Long/Short Toggle**: Click to switch between Long/Buy and Short/Sell modes
2. **Price Type**: Dropdown to select Market Price or Limit Price
3. **Asset Type**: Dropdown to select USDC or Shares
4. **Percent Buttons**: Click 25%, 50%, or 100% to auto-fill the amount
5. **Close Position**: Click "Market close" or "Limit close" to remove a position with animation

## Mobile Preview

The application is designed for mobile viewport (375px width). For best results:

1. Open in browser dev tools
2. Set viewport to Mobile (375x667 or iPhone SE)
3. Or use the mobile preview in Storybook

## Storybook Stories

The following stories are available:

- `TradeScreen` - Full trading screen
- `OrderPanel` - Order entry panel with different balance scenarios
- `PositionsPanel` - Positions list with interactive close functionality
  - **Interactive story** demonstrates position removal

## Technologies

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Icon library
- **Storybook** - Component development

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Notes

- The UI is optimized for mobile viewport (max-width: 420px)
- All interactions are fully functional (no dummy placeholders)
- Position close functionality includes smooth animations
- The Earn Rewards button has a continuously animated gradient border
- All dropdowns are fully functional with proper state management

## License

MIT
