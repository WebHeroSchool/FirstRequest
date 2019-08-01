const body = document.body;

const url = window.location.toString()
const getUsername = (url) => {
	let splitOfUrl = url.split('=');
	let stringOfUsername  = splitOfUrl[1];
	if (stringOfUsername == undefined) {
		stringOfUsername = 'lunar616';
	}
	return stringOfUsername;
}
getUsername(url);
fetch(`https://api.github.com/users/${getUsername(url)}`)
	.then(res => res.json())
	.then(user => {
		avatarOfUser = user.avatar_url;
		bioOfUser = user.bio;
		urlOfUser = user.url;
		const addUser = () => {
			const user = document.createElement('h1');
			user.innerHTML = `${getUsername(url)}`;
			body.appendChild(user);
		}
		const addBio = () => {
			const bio = document.createElement('p');
			bio.innerHTML = `${bioOfUser}`;
			body.appendChild(bio);
		}
		const addImg = () => {
			const img = document.createElement('img');
			img.src = this.avatarOfUser;
			body.appendChild(img);
		}
		addUser();
		addBio();
		addImg();
	})
	.catch(err => alert('Информация о пользователе не доступна'));