'use client';
import * as React from 'react'
import PocketBase from 'pocketbase';
//json
import colors from './colors'

const pb = new PocketBase('http://127.0.0.1:8090');
export default function Counter() {

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
