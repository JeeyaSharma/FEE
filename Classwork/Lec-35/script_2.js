let url='https://catfact.ninja/fact';

async function getData()
{
    let res=fetch(url);
    console.log(res);
}
getData();