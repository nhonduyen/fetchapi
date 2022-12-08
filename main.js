const initApp = async () => {
    const btnGet = document.getElementById('btnGet')
    const btnPost = document.getElementById('btnPost')
    const btnPut = document.getElementById('btnPut')
    const btnDelete = document.getElementById('btnDelete')
    const btnPatch = document.getElementById('btnPatch')
    const formFile = document.getElementById('formFile')
    const lblResult = document.getElementById('result')

    btnGet.addEventListener('click', async() => {
        try {
            lblResult.innerHTML = 'Processing'
            const url = 'https://jsonplaceholder.typicode.com/users'
            const data = await getData(url);
            lblResult.innerHTML = JSON.stringify(data)
        } catch (exception) {
            console.log(exception)
            lblResult.innerHTML = `Message: ${exception.message}; Stack: ${exception.stack}`
        }
    })

    btnPost.addEventListener('click', async() => {
        try {
            lblResult.innerHTML = 'Processing'
            const url = 'https://jsonplaceholder.typicode.com/posts'
            var param = {
                title: 'duyen',
                body: 'content',
                userId: 123
            }
            const data = await postData(url, param);
            lblResult.innerHTML = JSON.stringify(data)
        } catch (exception) {
            console.log(exception)
            lblResult.innerHTML = `Message: ${exception.message}; Stack: ${exception.stack}`
        }
    })

    btnPut.addEventListener('click', async() => {
        try {
            lblResult.innerHTML = 'Processing'
            const url = 'https://jsonplaceholder.typicode.com/posts/1'
            var param = {
                id: 1,
                title: 'duyen',
                body: 'content',
                userId: 1
            }
            const data = await putData(url, param);
            lblResult.innerHTML = JSON.stringify(data)
        } catch (exception) {
            console.log(exception)
            lblResult.innerHTML = `Message: ${exception.message}; Stack: ${exception.stack}`
        }
    })

    btnPatch.addEventListener('click', async() => {
        try {
            lblResult.innerHTML = 'Processing'
            const url = 'https://jsonplaceholder.typicode.com/posts/1'
            var param = {
                title: 'foo'
            }
            const data = await putData(url, param);
            lblResult.innerHTML = JSON.stringify(data)
        } catch (exception) {
            console.log(exception)
            lblResult.innerHTML = `Message: ${exception.message}; Stack: ${exception.stack}`
        }
    })

    btnDelete.addEventListener('click', async() => {
        try {
            lblResult.innerHTML = 'Processing'
            const url = 'https://jsonplaceholder.typicode.com/posts/1'
            const data = await deleteData(url);
            lblResult.innerHTML = JSON.stringify(data)
        } catch (exception) {
            console.log(exception)
            lblResult.innerHTML = `Message: ${exception.message}; Stack: ${exception.stack}`
        }
    })

    formFile.addEventListener('change', async() => {
        try {
            // https://api.imgbb.com/1/upload?key=8d5867a9512390fb5e5dc97839aa36f6
            //const url = 'http://freeimage.host/api/1/upload/?key=6d207e02198a847aa98d0a2a901485a5'
            console.log(formFile.files)
            lblResult.innerHTML = 'Processing'
            const formData = new FormData()
            formData.append('image', formFile.files[0])
            console.log(formFile.files[0])
            const url = 'https://api.imgbb.com/1/upload?key=0c30632409e38e18df32f931d869a0e5'
            const data = await uploadData(url, formData);
            lblResult.innerHTML = JSON.stringify(data)
        } catch (exception) {
            console.log(exception)
            lblResult.innerHTML = `Message: ${exception.message}; Stack: ${exception.stack}`
        }
    })
}

document.addEventListener('DOMContentLoaded', initApp())