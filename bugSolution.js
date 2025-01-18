```javascript
// Correct usage of $inc operator in MongoDB update operation
db.collection('myCollection').updateOne({fieldName: 'value'}, {$inc: {counter: 1}});
```