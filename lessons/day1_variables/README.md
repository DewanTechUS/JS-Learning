# Day 1 – Variables, Data Types, and Console

**Name:** Dewan Mahmud (Rocky)

---

## 🎯 Learning Objectives
- Understand what JavaScript is used for  
- Learn how to create and use variables (`let`, `const`)  
- Identify the five main data types  
- Use `console.log()` to display output  

---

## 🧠 Concepts
| Keyword | Can Change? | Example | Use For |
|----------|--------------|----------|---------|
| `let` | ✅ | `let age = 25;` | Values that change |
| `const` | ❌ | `const name = "Rocky";` | Fixed values |

**Data Types:**
- String → `"Hello"`
- Number → `27`, `3.14`
- Boolean → `true`, `false`
- Undefined → declared but no value
- Null → intentionally empty

---

## 💻 Code Examples

### Example 1: Variables
```js
let firstName = "Dewan";
let lastName = "Mahmud";
const program = "Per Scholas";

console.log(`Hello, my name is ${firstName} ${lastName}, and I’m in the ${program} program.`);
