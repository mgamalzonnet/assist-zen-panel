# 📊 Dashboard UI/UX Skill

## Context and Goals

Build a **dark-themed, high-performance dashboard** that prioritizes clarity, fast interaction, and scalable components. The goal is to help users **scan, analyze, and act on data with minimal friction**.

---

## 🎨 Design Tokens and Foundations

### Color Tokens (Use tokens, not raw values)

```ts
export const colors = {
  primary: "#D18C2D",
  primaryHover: "#b37422",
  primaryActive: "#8f5a1b",

  bg: "#09090b",
  surface: "#111827",
  surfaceElevated: "#1f2937",

  border: "#2d3748",

  text: "#fafafa",
  textMuted: "#9ca3af",

  success: "#10b981",
  warning: "#f59e0b",
  danger: "#ef4444",
};
```

---

### Typography

* Font: **IBM Plex Sans**
* Scale: `12 / 14 / 16 / 20 / 24 / 32`
* Rules:

  * Body → 14px
  * Headings → 20–32px
  * Tables → 12–14px

---

### Spacing (8pt Grid)

```ts
[8, 16, 24, 32, 40, 48]
```

* MUST use consistent spacing
* DON'T mix random values like `13px`, `22px`

---

### Radius & Elevation

```ts
radius: {
  sm: "8px",
  md: "12px",
  lg: "16px"
}
```

* Use soft shadows, not heavy blur
* Prefer subtle glass effect:

```css
backdrop-filter: blur(8px);
```

---

## 🧩 Component-Level Rules

### 1. Layout

#### Structure

```
Sidebar | Topbar
        | Content
```

#### Rules

* Sidebar → fixed width (240–280px)
* Content → scrollable
* Max width container: `1280px`

---

### 2. Buttons

#### Variants

* Primary
* Secondary
* Ghost
* Danger

#### States (MUST implement all)

* default
* hover
* focus-visible
* active
* disabled
* loading

#### Rules

* Height ≥ 40px
* Padding: `px-4 py-2`
* Focus ring REQUIRED

```css
:focus-visible {
  outline: 2px solid #0C5CAB;
}
```

---

### 3. Cards (Core Dashboard Element)

#### Anatomy

* Header (title + action)
* Content
* Optional footer

#### Rules

* Use `surface` color
* Padding: `16px`
* Border: subtle (`border` token)

---

### 4. Tables

#### Features (Required)

* Sorting
* Pagination
* Search/filter
* Sticky header

#### Rules

* Row height ≥ 44px
* Text truncation with tooltip
* Empty state REQUIRED

---

### 5. Forms

#### Anatomy

* Label
* Input
* Helper/Error text

#### Rules

* Inline validation (not after submit)
* Error color = `danger`
* Disabled inputs must be visually distinct

---

### 6. States (Critical UX)

#### Loading

* Use skeletons (NOT spinners)

#### Empty

* Icon + message + CTA

#### Error

* Clear message + retry button

---

### 7. Navigation

#### Rules

* Active item MUST be highlighted
* Max depth: 3 levels
* Breadcrumbs for deep pages

---

### 8. Responsive Behavior

#### Rules

* Sidebar → collapses to drawer
* Cards → stack vertically
* Tables → horizontal scroll

---

## ♿ Accessibility Requirements

### MUST

* Contrast ratio ≥ 4.5:1
* All interactive elements keyboard accessible
* Focus-visible states present
* Touch targets ≥ 44px

### Testable Criteria

* Can navigate entire dashboard using `Tab`
* Screen reader reads labels correctly
* No color-only meaning (use icons/text)

---

## ✍️ Content and Tone

### Style

* Short, clear, action-oriented

### Examples

| Bad                       | Good                              |
| ------------------------- | --------------------------------- |
| "Submit your information" | "Save"                            |
| "An error occurred"       | "Failed to load data. Try again." |

---

## ❌ Anti-Patterns

### DON'T

* Use low contrast text
* Mix multiple styles (glass + flat randomly)
* Hide important actions
* Use only icons without labels
* Add unnecessary animations

---

## 🔄 Migration Notes

If your dashboard is inconsistent:

* Replace hardcoded colors → tokens
* Standardize spacing → 8pt grid
* Convert repeated UI → reusable components
* Add missing states (loading/empty/error)

---

## ✅ QA Checklist (Use in Code Review)

* [ ] Uses design tokens (no raw hex values)
* [ ] All components have full states
* [ ] Accessible via keyboard
* [ ] Responsive on mobile
* [ ] Empty/loading/error states implemented
* [ ] Text is clear and actionable
* [ ] Spacing follows 8pt system
* [ ] No visual inconsistencies

---

## 🚀 Final Rule

> If the user has to think → the design failed.
> If the user flows naturally → you nailed it.

