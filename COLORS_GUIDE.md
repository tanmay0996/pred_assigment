# Color Customization Guide

This guide shows you exactly how to change colors in the Trading Mobile UI.

## Quick Start

**All colors are controlled by 7 CSS variables.** Change them in one place, and the entire UI updates.

## Where to Change Colors

### Primary Method: Edit `src/index.css`

Open `src/index.css` and find the `:root` section (lines 5-14):

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

## Color Variables Explained

### 1. `--bg-base` (Page Background)

**Current**: `#0a0a0a` (almost black)

**Used for**:
- Main page background
- Button backgrounds
- Input field backgrounds

**Example alternatives**:
- Pure black: `#000000`
- Dark blue: `#0f1419`
- Dark purple: `#1a0f2e`

---

### 2. `--panel-bg` (Panel Background)

**Current**: `#1a1a1a` (dark gray)

**Used for**:
- Card backgrounds
- OrderPanel background
- OrderBook background
- PositionsPanel background
- Header bar background

**Example alternatives**:
- Slightly lighter: `#242424`
- Blue-tinted: `#1a1f2e`
- Brown-tinted: `#1f1a15`

---

### 3. `--muted` (Muted Text/Borders)

**Current**: `#666666` (medium gray)

**Used for**:
- Secondary text
- Placeholder text
- Separator lines
- Inactive buttons
- Icons

**Example alternatives**:
- Lighter gray: `#888888`
- Blue-gray: `#6b7280`
- Warm gray: `#6b6560`

---

### 4. `--text-primary` (Main Text)

**Current**: `#ffffff` (white)

**Used for**:
- All primary text
- Button labels
- Headings
- Input values

**Example alternatives**:
- Off-white: `#f5f5f5`
- Warm white: `#fef3e2`
- Cool white: `#e8f0fe`

---

### 5. `--accent-green` (Primary Action)

**Current**: `#7ed321` (bright green)

**Used for**:
- Long/Buy button (active state)
- Primary CTA button
- Success indicators
- Positive price changes
- Active tab indicator

**Example alternatives**:
- Blue: `#3b82f6`
- Purple: `#8b5cf6`
- Teal: `#14b8a6`
- Orange: `#f97316`

---

### 6. `--accent-red` (Negative/Danger)

**Current**: `#ff4444` (bright red)

**Used for**:
- Short/Sell button (active state)
- Negative indicators
- Loss display

**Example alternatives**:
- Dark red: `#dc2626`
- Pink: `#ec4899`
- Orange-red: `#f87171`

---

### 7. `--accent-highlight` (Price Highlight)

**Current**: `#ff6b35` (orange)

**Used for**:
- OrderBook prices
- Price displays
- Special highlights

**Example alternatives**:
- Yellow: `#fbbf24`
- Blue: `#60a5fa`
- Purple: `#a78bfa`
- Green: `#34d399`

## Example Color Schemes

### Scheme 1: Blue Theme

```css
:root {
  --bg-base: #0a0e1a;
  --panel-bg: #1a2332;
  --muted: #64748b;
  --text-primary: #f8fafc;
  --accent-green: #3b82f6;
  --accent-red: #ef4444;
  --accent-highlight: #60a5fa;
}
```

### Scheme 2: Purple Theme

```css
:root {
  --bg-base: #1a0f2e;
  --panel-bg: #2a1f3e;
  --muted: #6b7280;
  --text-primary: #f5f3ff;
  --accent-green: #8b5cf6;
  --accent-red: #ec4899;
  --accent-highlight: #a78bfa;
}
```

### Scheme 3: Teal Theme

```css
:root {
  --bg-base: #0a1f1f;
  --panel-bg: #1a3535;
  --muted: #64748b;
  --text-primary: #f0fdfa;
  --accent-green: #14b8a6;
  --accent-red: #f43f5e;
  --accent-highlight: #2dd4bf;
}
```

### Scheme 4: Light Mode

```css
:root {
  --bg-base: #f8fafc;
  --panel-bg: #ffffff;
  --muted: #94a3b8;
  --text-primary: #0f172a;
  --accent-green: #10b981;
  --accent-red: #ef4444;
  --accent-highlight: #f59e0b;
}
```

## How Colors Map to Tailwind Classes

The CSS variables are automatically mapped to Tailwind classes in `tailwind.config.js`:

| CSS Variable | Tailwind Class | Usage Example |
|--------------|----------------|---------------|
| `--bg-base` | `bg-base` | `className="bg-base"` |
| `--panel-bg` | `bg-panel-bg` | `className="bg-panel-bg"` |
| `--muted` | `text-muted` | `className="text-muted"` |
| `--text-primary` | `text-text-primary` | `className="text-text-primary"` |
| `--accent-green` | `bg-primary` | `className="bg-primary"` |
| `--accent-red` | `bg-danger` | `className="bg-danger"` |
| `--accent-highlight` | `text-highlight` | `className="text-highlight"` |

## Testing Your Color Changes

1. **Edit** `src/index.css` with your new colors
2. **Save** the file
3. **Refresh** browser (dev server auto-reloads)
4. **Verify** all components look good:
   - Check HeaderBar
   - Check OrderPanel (try both Long and Short)
   - Check OrderBook prices
   - Check Positions list
   - Check all buttons and inputs

## Tips for Choosing Colors

### Contrast Ratios

For accessibility, maintain these minimum contrast ratios:

- **Text on background**: 4.5:1 (normal text)
- **Large text on background**: 3:1
- **Button text on button background**: 4.5:1

Use a contrast checker: https://webaim.org/resources/contrastchecker/

### Color Harmony

Choose colors that work well together:

1. **Analogous**: Colors next to each other on color wheel (e.g., blue, blue-green, green)
2. **Complementary**: Colors opposite on color wheel (e.g., blue and orange)
3. **Monochromatic**: Different shades of the same color

### Brand Colors

If you have brand colors:

1. Set `--accent-green` to your primary brand color
2. Set `--accent-highlight` to your secondary brand color
3. Adjust `--bg-base` and `--panel-bg` to match brand tone
4. Keep `--text-primary` high contrast for readability

## Troubleshooting

### Problem: Colors not updating

**Solution**:
1. Make sure you saved `src/index.css`
2. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
3. Check browser DevTools for CSS errors

### Problem: Text not readable

**Solution**:
- Increase contrast between `--text-primary` and backgrounds
- Use a contrast checker tool
- Test with real users

### Problem: Buttons look wrong

**Solution**:
- Make sure `--accent-green` and `--accent-red` have enough contrast with text
- Consider making button text white or black for maximum readability

### Problem: Colors look different in production

**Solution**:
- Run `npm run build` to test production build
- Run `npm run preview` to test locally
- Check if any build tools are modifying CSS

## Advanced: Adding New Color Variables

If you need additional colors:

1. **Add to `src/index.css`**:
```css
:root {
  /* existing variables... */
  --accent-blue: #3b82f6;
}
```

2. **Add to `tailwind.config.js`**:
```javascript
extend: {
  colors: {
    // existing colors...
    'accent-blue': 'var(--accent-blue)',
  },
}
```

3. **Use in components**:
```tsx
<div className="bg-accent-blue">...</div>
```

## Need Help?

- Check `README.md` for general setup
- Check `IMPLEMENTATION_GUIDE.md` for component details
- Inspect elements in browser DevTools to see which colors are applied
- Search codebase for color variable names to see where they're used

---

**Quick Reference**: All 7 color variables control the entire UI theme. Change them in `src/index.css` and the changes apply everywhere instantly.
