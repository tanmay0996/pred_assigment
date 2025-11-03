# Component Tree Structure

Visual hierarchy of all components in the Trading Mobile UI.

## Application Structure

```
App.tsx
└── TradeScreen.tsx (Main Container)
    ├── HeaderBar.tsx
    │   ├── Menu Button (Icon)
    │   ├── EPL Dropdown
    │   │   └── Soccer Icon + Text + ChevronDown
    │   ├── Earn Rewards Button (Animated)
    │   │   └── Gift Icon + Text
    │   └── Profile Avatar
    │
    ├── CategoryTabs.tsx
    │   ├── CategoryTab: "Live & Upcoming" (Clock icon)
    │   ├── CategoryTab: "Winner" (Trophy icon) [ACTIVE]
    │   ├── CategoryTab: "MVP" (Award icon)
    │   └── CategoryTab: "Top 3 te" (TrendingUp icon)
    │
    ├── MarketCard.tsx
    │   ├── Team Logo (Soccer emoji)
    │   ├── Team Name ("MANC")
    │   ├── Volume Info
    │   ├── Chance Percentage
    │   └── Price Change
    │
    ├── (Two-column layout)
    │   ├── OrderPanel.tsx (Left Column)
    │   │   ├── Long/Short Toggle
    │   │   │   ├── Button: "Long/Buy"
    │   │   │   └── Button: "Short/Sell"
    │   │   │
    │   │   ├── Price Type Dropdown
    │   │   │   ├── Current: "Market Price" or "Limit Price"
    │   │   │   └── ChevronDown icon
    │   │   │
    │   │   ├── Limit Price Input (conditional)
    │   │   │
    │   │   ├── Asset Type Dropdown
    │   │   │   ├── Current: "USDC" or "Shares"
    │   │   │   └── ChevronDown icon
    │   │   │
    │   │   ├── Balance Display
    │   │   │   └── "$265 Available"
    │   │   │
    │   │   ├── Amount Input Row
    │   │   │   ├── Minus Button
    │   │   │   ├── Input Field
    │   │   │   └── Plus Button
    │   │   │
    │   │   ├── Percentage Buttons
    │   │   │   ├── Button: "25%"
    │   │   │   ├── Button: "50%"
    │   │   │   └── Button: "100%"
    │   │   │
    │   │   ├── Reduce Only Checkbox
    │   │   │
    │   │   ├── Info Rows
    │   │   │   ├── "To Win" + Amount
    │   │   │   └── "Avg. price" + Value
    │   │   │
    │   │   └── CTA Button
    │   │       └── "Long MANC" or "Short MANC"
    │   │
    │   └── OrderBook.tsx (Right Column)
    │       ├── Header Row
    │       │   ├── "Price"
    │       │   └── "Shares"
    │       │
    │       └── OrderBookEntry[] (list)
    │           └── Each entry:
    │               ├── Price (left, highlight color)
    │               └── Shares (right, white)
    │
    ├── Section Header
    │   ├── "EPL" text
    │   └── MoreVertical icon
    │
    ├── PositionsPanel.tsx
    │   ├── Tab Bar
    │   │   ├── Tab: "Positions" [ACTIVE]
    │   │   ├── Tab: "Open orders"
    │   │   └── Tab: "Trade History"
    │   │
    │   └── Positions List
    │       └── PositionItem[] (list)
    │           └── Each position:
    │               ├── Header
    │               │   ├── Team Name + Type
    │               │   └── Gain + Percent (with TrendingUp icon)
    │               │
    │               ├── Metrics Grid (2 columns)
    │               │   ├── Avg. price / Mark price
    │               │   └── Shares / Current value
    │               │
    │               └── Action Buttons
    │                   ├── "Market close"
    │                   └── "Limit close"
    │
    ├── FooterSection.tsx
    │   ├── Team Selector Dropdown
    │   │   ├── Team Icon
    │   │   ├── Team Name
    │   │   └── ChevronDown icon
    │   │
    │   └── View Team Info Button
    │       ├── Info icon
    │       └── "View team info" text
    │
    └── NavigationBar.tsx (Fixed Bottom)
        ├── NavButton: "Markets" (TrendingUp icon)
        ├── NavButton: "Trade" (BarChart3 icon) [ACTIVE]
        ├── NavButton: "$0.00" (DollarSign icon)
        └── NavButton: "More" (MoreHorizontal icon)
```

## Component Relationships

### Parent-Child Relationships

| Parent | Children | Count |
|--------|----------|-------|
| App | TradeScreen | 1 |
| TradeScreen | HeaderBar, CategoryTabs, MarketCard, OrderPanel, OrderBook, PositionsPanel, FooterSection, NavigationBar | 8 |
| HeaderBar | Buttons, Dropdowns | 4 |
| CategoryTabs | CategoryTab | 4 |
| OrderPanel | Toggles, Dropdowns, Inputs, Buttons | ~15 |
| OrderBook | OrderBookEntry | 11 |
| PositionsPanel | Tabs, PositionItem | 1-N |
| NavigationBar | NavButton | 4 |

### State Management

```
TradeScreen (Root State)
├── positions: Position[]
│   └── Passed to: PositionsPanel
│       └── Passed to: PositionItem[]
│
OrderPanel (Local State)
├── orderType: 'long' | 'short'
├── priceType: 'market' | 'limit'
├── assetType: 'usdc' | 'shares'
├── amount: string
├── limitPrice: string
├── reduceOnly: boolean
├── showPriceDropdown: boolean
└── showAssetDropdown: boolean

PositionsPanel (Local State)
└── activeTab: 'positions' | 'orders' | 'history'

PositionItem (Local State)
└── isClosing: boolean (for animation)
```

## Data Flow

### Position Close Flow

```
PositionItem
  │
  │ User clicks "Market close" or "Limit close"
  │
  ├─> setIsClosing(true)
  │   └─> Triggers fade animation (CSS)
  │
  └─> setTimeout(300ms)
      └─> onClose(positionId, closeType)
          │
          └─> PositionsPanel.onClosePosition()
              │
              └─> TradeScreen.handleClosePosition()
                  │
                  └─> setPositions(filtered array)
                      └─> Component re-renders
                          └─> Position removed from DOM
```

### Amount Calculation Flow

```
OrderPanel - Percentage Button Click
  │
  ├─> handlePercentClick(25 | 50 | 100)
  │
  ├─> Calculate: availableBalance * percent / 100
  │
  ├─> Format to 2 decimals
  │
  └─> setAmount(calculatedAmount)
      └─> Input field updates
          └─> "To Win" recalculates
```

### Dropdown Flow

```
Dropdown Component
  │
  ├─> User clicks dropdown button
  │   └─> setShowDropdown(true)
  │       └─> Dropdown menu appears
  │
  └─> User clicks option
      ├─> setState(selectedValue)
      └─> setShowDropdown(false)
          └─> Dropdown menu closes
```

## Component Props Interface

### TradeScreen
```typescript
// No props - top level component
```

### HeaderBar
```typescript
// No props - static content
```

### MarketCard
```typescript
interface MarketCardProps {
  logo: string;
  title: string;
  volume: string;
  chance: string;
  priceChange: string;
}
```

### OrderPanel
```typescript
interface OrderPanelProps {
  availableBalance: number;
  marketName: string;
}
```

### OrderBook
```typescript
interface OrderBookProps {
  orders: OrderBookEntry[];
}

interface OrderBookEntry {
  price: string;
  shares: number;
}
```

### PositionsPanel
```typescript
interface PositionsPanelProps {
  positions: Position[];
  onClosePosition: (positionId: string, closeType: 'market' | 'limit') => void;
}

interface Position {
  id: string;
  outcome: string;
  type: 'Long' | 'Short';
  gain: string;
  gainPercent: string;
  avgPrice: string;
  markPrice: string;
  shares: number;
  currentValue: string;
}
```

### FooterSection
```typescript
interface FooterSectionProps {
  selectedTeam: string;
}
```

### NavigationBar
```typescript
interface NavigationBarProps {
  activeTab?: string;
}
```

## Component File Sizes

| Component | Lines | Exports |
|-----------|-------|---------|
| TradeScreen.tsx | 85 | 1 |
| HeaderBar.tsx | 50 | 1 |
| CategoryTabs.tsx | 45 | 1 |
| MarketCard.tsx | 30 | 1 |
| OrderPanel.tsx | 220 | 1 |
| OrderBook.tsx | 35 | 1 |
| PositionsPanel.tsx | 170 | 2 (Panel + Position interface) |
| FooterSection.tsx | 30 | 1 |
| NavigationBar.tsx | 45 | 1 |
| **Total** | **~710** | **10** |

## Reusable Sub-Components

### Internal to Components

```
CategoryTab (inside CategoryTabs.tsx)
└── Used for each filter tab

NavButton (inside NavigationBar.tsx)
└── Used for each navigation item

PositionItem (inside PositionsPanel.tsx)
└── Used for each position in the list
```

## Icon Usage

| Component | Icons Used |
|-----------|------------|
| HeaderBar | Menu (custom SVG), ChevronDown, User |
| CategoryTabs | Clock, Trophy, Award, TrendingUp |
| OrderPanel | ChevronDown, Plus, Minus, Info |
| PositionsPanel | TrendingUp |
| FooterSection | ChevronDown, Info |
| NavigationBar | TrendingUp, BarChart3, DollarSign, MoreHorizontal |
| TradeScreen | MoreVertical |

**Icon Library**: Lucide React

## Styling Approach

All components use Tailwind CSS utility classes with global CSS variables:

```
Component.tsx
  └── className="bg-panel-bg text-text-primary"
      └── Resolves to CSS variables
          └── :root { --panel-bg: #1a1a1a; --text-primary: #ffffff; }
```

## Component Testing Matrix

| Component | Storybook Story | Interactive |
|-----------|----------------|-------------|
| TradeScreen | ✅ | No |
| HeaderBar | ✅ | No |
| MarketCard | ✅ (3 variants) | No |
| OrderPanel | ✅ (3 variants) | Yes (all inputs) |
| OrderBook | ✅ (2 variants) | No |
| PositionsPanel | ✅ (3 variants) | Yes (close action) |
| FooterSection | No | No |
| NavigationBar | No | No |
| CategoryTabs | No | No |

## Performance Characteristics

| Component | Re-renders | Optimization |
|-----------|------------|--------------|
| TradeScreen | On position changes | Could add memo |
| OrderPanel | On any input change | Local state |
| PositionsPanel | On position changes | Animation state |
| OrderBook | On order updates | Static for now |
| Others | Minimal | Static content |

## Accessibility Features

| Component | Features |
|-----------|----------|
| All | Semantic HTML |
| OrderPanel | Form labels, input validation |
| PositionsPanel | Button labels, clear actions |
| NavigationBar | ARIA labels, active state |
| Dropdowns | Keyboard navigation |

---

This tree structure shows the complete hierarchy and relationships between all components in the Trading Mobile UI.
