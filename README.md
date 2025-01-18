# MongoDB $inc Operator Error with String Value

This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations.  The `$inc` operator is designed to increment a numerical value, but passing a string value will result in an error.  The solution shows the correct usage of the `$inc` operator.

## Bug
The bug lies in the incorrect usage of the `$inc` operator. The following code snippet attempts to increment the `counter` field by a string value ('1'), which is incorrect and leads to an error.

```javascript
db.collection('myCollection').updateOne({fieldName: 'value'}, {$inc: {counter: '1'}});
```
## Solution
The solution involves using the correct numeric value when incrementing with the `$inc` operator.

```javascript
db.collection('myCollection').updateOne({fieldName: 'value'}, {$inc: {counter: 1}});
```