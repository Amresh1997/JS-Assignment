debugger;

var myPromise = new Promise((resolve, reject) => {
    debugger;
    setTimeout(() => {
        debugger;
        reject("This is as Specified, Resolved Promise")
    }, 5000)
})

myPromise.then((resolutionData) => {
    debugger;
}, (rejectionData) => {
    debugger;
})

// APi which return List of Employees....