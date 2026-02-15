# Splash Screen Feature

## Overview

A stunning animated splash screen that displays "Welcome to Society Ops" when users first visit the website. The splash screen shows for 4 seconds with beautiful animations before transitioning to the main application.

## Features

### 🎨 Visual Elements

1. **Gradient Background**
   - Dark theme with gradient from slate-950 to black
   - Smooth, professional appearance

2. **Animated Glowing Orbs**
   - Two large glowing orbs (cyan and purple)
   - Pulsing animation that creates depth
   - Blur effect for soft, ambient lighting

3. **Floating Particles**
   - 20 animated particles floating across the screen
   - Random positions and timing for organic feel
   - Cyan color with opacity variations

4. **Central Logo Icon**
   - Sparkles icon in a glassmorphic container
   - Rotating animation (360° continuous spin)
   - Glowing ring effect that pulses
   - Scale-in entrance with spring animation

5. **Orbiting Particles**
   - 3 small particles orbiting the logo
   - Staggered animation for visual interest
   - Cyan glow effect

6. **Welcome Text**
   - "Welcome to" with animated gradient
   - "Society Ops" in large, bold text
   - Gradient text effect (cyan to purple)
   - Glow/blur effect behind text
   - Smooth fade-in animations

7. **Subtitle**
   - "Society Management Console" in smaller text
   - Uppercase with wide letter spacing
   - Subtle fade-in

8. **Loading Indicator**
   - 3 pulsing dots
   - "Loading your experience..." text
   - Breathing animation effect

9. **Progress Bar**
   - Gradient line at the bottom
   - Animates from 0 to 100% over 4 seconds
   - Cyan gradient effect

### ⚡ Animations

1. **Entrance Animations**
   - Logo: Scale from 0 with rotation
   - Text: Fade in with upward motion
   - Staggered timing for smooth sequence

2. **Continuous Animations**
   - Logo rotation (360° loop)
   - Orbiting particles
   - Pulsing glows
   - Floating particles
   - Gradient text shimmer
   - Loading dots pulse

3. **Exit Animation**
   - Smooth fade out (0.5s)
   - Transitions to main app

### ⏱️ Timing

- **Total Duration**: 4 seconds
- **Auto-dismiss**: Automatically transitions to main app
- **Animation Sequence**:
  - 0.0s: Logo appears
  - 0.5s: "Welcome to" fades in
  - 0.8s: "Society Ops" scales in
  - 1.2s: Subtitle appears
  - 1.5s: Loading indicator shows
  - 4.0s: Fade out and show main app

## Technical Implementation

### Files Created/Modified

1. **src/components/SplashScreen.tsx** (NEW)
   - Main splash screen component
   - All animations and visual elements
   - Auto-dismiss logic

2. **src/App.tsx** (MODIFIED)
   - Added state management for splash screen
   - Integrated AnimatePresence for smooth transitions
   - Controls when to show splash vs main app

### Dependencies Used

- **framer-motion**: For all animations
- **lucide-react**: For the Sparkles icon
- **Tailwind CSS**: For styling and gradients

### State Management

```tsx
const [showSplash, setShowSplash] = useState(true);
```

- Initially set to `true` to show splash screen
- After 4 seconds, automatically set to `false`
- Triggers transition to main application

### Animation Flow

```tsx
<AnimatePresence mode="wait">
  {showSplash ? (
    <SplashScreen onComplete={() => setShowSplash(false)} />
  ) : (
    <AppRouter />
  )}
</AnimatePresence>
```

## Customization Options

### Change Duration

In `SplashScreen.tsx`, modify the timeout:

```tsx
setTimeout(onComplete, 4000); // Change 4000 to desired milliseconds
```

### Change Colors

Update the gradient colors:

```tsx
// Background
className = "bg-gradient-to-br from-slate-950 via-slate-900 to-black";

// Text gradient
className = "bg-gradient-to-r from-neonCyan to-neonPurple";
```

### Change Text

Update the text content:

```tsx
<h1>Welcome to</h1>
<h2>Society Ops</h2>
<p>Society Management Console</p>
```

### Disable Splash Screen

To temporarily disable (for development):

In `App.tsx`:

```tsx
const [showSplash, setShowSplash] = useState(false); // Set to false
```

Or remove the splash screen entirely and revert to:

```tsx
function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </LanguageProvider>
  );
}
```

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Performance

- Optimized animations using Framer Motion
- GPU-accelerated transforms
- Minimal re-renders
- Smooth 60fps animations

## Accessibility

- Respects `prefers-reduced-motion` (can be added)
- High contrast text
- Semantic HTML structure
- Auto-dismiss (no user action required)

## Future Enhancements

Potential improvements:

1. Add skip button for returning users
2. Store in localStorage to show only on first visit
3. Add sound effects (optional)
4. Preload main app assets during splash
5. Add progress bar showing actual loading progress
6. Respect user's motion preferences

## Testing

1. **Refresh the page** - Splash should appear
2. **Wait 4 seconds** - Should auto-transition to main app
3. **Check animations** - All elements should animate smoothly
4. **Check on mobile** - Should be responsive

## Troubleshooting

### Splash doesn't appear

- Check if `showSplash` state is initially `true`
- Verify SplashScreen component is imported
- Check browser console for errors

### Animations are choppy

- Check if hardware acceleration is enabled
- Reduce number of particles
- Simplify animations

### Splash doesn't dismiss

- Check setTimeout is working
- Verify onComplete callback is called
- Check for JavaScript errors

### Text is not visible

- Verify Tailwind classes are compiled
- Check text color contrast
- Ensure fonts are loaded
