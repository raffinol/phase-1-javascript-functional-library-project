function collectionToArray(collection) {
  if (collection !== Array.isArray(collection)) {
    return (collection = Object.values(collection));
  } else {
    return collection;
  }
}

function myEach(collection, callback) {
  const newCollection = collectionToArray(collection);
  for (let index = 0; index < newCollection.length; index++) {
    callback(newCollection[index]);
  }
  return collection;
}

function myMap(collection, callback) {
  const newCollection = collectionToArray(collection);
  const newArray = [];

  for (let index = 0; index < newCollection.length; index++) {
    newArray.push(callback(newCollection[index]));
  }
  return newArray;
}

function myReduce(collection, callback, acc) {
  let newCollection = collectionToArray(collection);

  if (!acc) {
    acc = newCollection[0];
    newCollection = newCollection.slice(1);
  }

  for (let index = 0; index < newCollection.length; index++) {
    acc = callback(acc, newCollection[index], newCollection);
  }

  return acc;
}

function myFind(collection, predicate) {
  const newCollection = collectionToArray(collection);
  for (let index = 0; index < newCollection.length; index++) {
    if (predicate(newCollection[index])) return newCollection[index];
  }
  return undefined;
}

function myFilter(collection, predicate) {
  const newCollection = collectionToArray(collection);
  const newArray = [];

  for (let index = 0; index < newCollection.length; index++) {
    if (predicate(newCollection[index])) newArray.push(newCollection[index]);
  }
  return newArray;
}

function mySize(collection) {
  const newCollection = collectionToArray(collection);
  return newCollection.length;
}

function myFirst(array, i) {
  if (i !== undefined) {
    return array.slice(0, i);
  } else {
    return array[0];
  }
}

function myLast(array, i) {
  if (i !== undefined) {
    return array.slice(array.length - i, array.lenght);
  } else {
    return array[array.length - 1];
  }
}

function myKeys(object) {
  const keys = [];
  for (let key in object) {
    keys.push(key);
  }
  return keys;
}

function myValues(object) {
  const values = [];
  for (let key in object) {
    values.push(object[key]);
  }
  return values;
}
