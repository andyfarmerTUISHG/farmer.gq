---
slug: "/blog/generic-react-handler"
date: "20200-08-08"
title: "React Generic Handler for any input type"
---

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
