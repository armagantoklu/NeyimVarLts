import React from 'react';
import database from './../../../Database.json';
const Filter = (data, organ) => {
  const filtredList = database[organ][4].belirti.filter(item => {
    const girilen = data.toLowerCase();
    const value = item.toLowerCase();
    return value.indexOf(girilen) > -1;
  });

  return filtredList;
};
export default Filter;
