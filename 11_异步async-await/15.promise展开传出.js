Promise.resolve()
  .then(() => {
    console.log(0);
    return Promise.resolve(4);
  })
  .then((res) => {
    console.log(res);
  });

Promise.resolve()
  .then(() => {
    console.log(1);
  })
  .then(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  })
  .then(() => {
    console.log(5);
  });

// return Promise.resolve()
//   .then(() => {   // 展开
//     return 4;
//   })
//   .then((x) => {   // 赋值
//     return x;
//   })
//   .then((res) => {
//     console.log(res);
//   });

// [
//   () => {
//     console.log(0);
//     return Promise.resolve(4); // return Promise.resolve().then( () => { return 4 } )
//   },

//   () => {
//     console.log(1);
//   },
// ];
// 0

// [
//   (() => {
//     console.log(1);
//   },
//   () => {
//     return 4;
//   }),
// ];
// 0 1

// [
//   () => {
//     return 4;
//   },
//   () => {
//     console.log(2);
//   },
// ];
// 0 1

// [
//   () => {
//     console.log(2);
//   },
//   (x) => {
//     return x;
//   },
// ];
// 0 1 2

// [
//   (x) => {
//     return x;
//   },
//   () => {
//     console.log(3);
//   },
// ];
// 0 1 2

// [
//   () => {
//     console.log(3);
//   },
//   (res) => {
//     console.log(res);
//   },
// ];
// 0 1 2 3

// [
//   (res) => {
//     console.log(res);
//   },
//   () => {
//     console.log(5);
//   },
// ];
// 0 1 2 3 4 5
