## 📚 Development Conventions

To maintain consistency across the project and simplify collaboration among developers, please follow the conventions outlined below.

---

### ✅ General Coding Practices

- Use **TypeScript** only (`.ts` / `.tsx` files).
- Prefer `const` and `let` — avoid `var`.
- Always type props, state, and parameters using `type` or `interface`.
- Use **named exports** (no `export default` unless absolutely necessary).
- Keep functions and utilities **pure** and side-effect free unless they're hooks or lifecycle-driven.

---

### 📁 Folder & File Structure

Organize code in a **feature-first** structure:

### 🪝 Custom Hooks

**✅ Do:**

- Name hooks starting with `use` (e.g., `useStatusBar`, `useDebounce`).
- Keep reusable logic separate from UI.
- Declare associated types/enums in `types.ts` next to the hook.

**❌ Don’t:**

- Call hooks inside conditionals or loops.
- Mix UI concerns or one-off logic in reusable hook files.

---

### 🧰 Utilities & Enums

**✅ Do:**

- Keep pure helpers (e.g., `capitalize`, `formatDate`) in `/utils`.
- Store shared enums and types in `/types` or `/constants`.
- Use `export type {}` for types/interfaces.
- Use `export {}` for enums/values.

**❌ Don’t:**

- Hardcode magic strings — use enums/constants.
- Export enums and types in the same line (unless using `export { type A, B }`).

---

### 📦 Imports & Barrel Files

**✅ Do:**

- Use `index.ts` as a **barrel file** for each module (`hooks`, `utils`, etc.).
- Keep imports clean and specific:
  ```ts
  import { BarStyle } from '@hooks/useStatusBar';
  ```
