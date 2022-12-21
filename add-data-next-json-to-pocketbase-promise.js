'use client';
import * as React from 'react'
import PocketBase from 'pocketbase';
//json
import colors from './colors'

const pb = new PocketBase('http://127.0.0.1:8090');
export default function Counter() {
  const data = [
    {
      "id_": 1079,
      "name": "Duplo Light Green",
      "rgb": "60BA76",
      "is_trans": "f"
    },
    {
      "id_": 1080,
      "name": "Light Tan",
      "rgb": "F3C988",
      "is_trans": "f"
    },
  ]

const returnPromise = async(item?: any) => {
  const record = await pb.collection('colors').create(item, {'$autoCancel': false});

}
const doAsync = async(item: any) => {
  return returnPromise(item);
}

const getData = async () => {
  return Promise.all(colors.map(item => doAsync(item)))
}



  return (
    <div>
      <button onClick={() => {
        getData()
      }}>Click me</button>
    </div>
  );
}
