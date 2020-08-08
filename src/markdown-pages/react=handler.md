```javascript
const handleChange = evt => {
  const value =
    evt.target.type === "checkbox" ? evt.target.checked : evt.target.value
  setState({
    ...state,
    [evt.target.name]: value,
  })
}
```
