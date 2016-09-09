/*
* @Author: laihaibo
* @Date:   2016-09-09 11:21:25
* @Last Modified by:   laihaibo
* @Last Modified time: 2016-09-09 13:28:21
*/

'use strict';

const STORAGE_KEY = 'todolist';

export default{
  fetch(){
    //减少代码耦合
    // return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[{"text":"add Some awesome"}]');
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY));
  },
  save(items){
    window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items));
  }
}
