// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

const getData = async(url) => {
    return (await fetch(url)).json()
}

const postData = async(url, data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        redirect: 'follow',
        body: JSON.stringify(data)
    })
    return response.json()
}

const putData = async(url, data = {}) => {
    const response = await fetch(url, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        redirect: 'follow',
        body: JSON.stringify(data)
    })
    return response.json()
}

const patchData = async(url, data = {}) => {
    const response = await fetch(url, {
        method: 'PATCH',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        redirect: 'follow',
        body: JSON.stringify(data)
    })
    return response.json()
}

const deleteData = async(url, data = {}) => {
    const response = await fetch(url, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        redirect: 'follow',
        body: JSON.stringify(data)
    })
    return response.json()
}

const uploadData = async(url, data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        body: data
    })
    return response.json()
}