const myPromise = () => new Promise ((resolve,reject)=>{
  return setTimeout(() =>{
    resolve ("ok")
  },2000)//depois de 2 segundos ele impirme "ok"
})

const exec = async () => {
  await myPromise()
  console.log("primeira vez")

  await myPromise()
  console.log("segunda vez")

  await myPromise()
  console.log("terceira vez")

  await myPromise()
  console.log("quarata vez")
}
exec()