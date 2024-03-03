<template>
	<div id="main">
        <input type="text" id="nom" placeholder="Nom de l'animal">
        <div id="container-photo">
			<label for="fileInput" id="button-file">
				<input type="file" id="fileInput" style="display: none;" />
				<div id="rectangle">
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="22.5" cy="22.5" r="21" stroke="#B7B4B4" stroke-width="3"/>
                        <path d="M30.064 21.4731V24.481H23.6553V30.8896H20.6475V24.481H14.2388V21.4731H20.6475V15.0645H23.6553V21.4731H30.064Z" fill="#B7B4B4"/>
                    </svg>
                </div>
			</label>
		</div>
        <h4>Choisissez une photo où l’on voit bien votre animal</h4>
        <h1 class="bold">Son permis</h1>
        <div id="permis">
            <span id="photo-permis"></span>
            <div id="texte">
                <span id="nom-permis"></span>
                <span id="age-permis"></span>
                <div id="description-permis">
                    <span class="description"></span>
                    <span class="description"></span>
                    <span class="description"></span>
                    <span class="description"></span>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
	#main {
        padding: 90px 40px 0px 40px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 30px;
		height: 100vh;
	}

    #nom {
        font-size: 35px;
        width: 100%;
        caret-color: var(--color-blue);
        color: var(--color-blue);
        font-weight: 700;
        border : none;
        outline: none;
    }

    #nom::placeholder {
        color: #C7C7C7;
    }

    #rectangle {
        width: 327px;
        height: 227px;
        border-radius: 5px;
        background: #E4E4E4;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h4 {
        text-align: center;
    }

    h1 {
        color: var(--color-blue);
        align-self: normal;
    }

    #permis {
        display: flex;
        align-items: normal;
        gap: 40px;
    }

    #photo-permis {
        width: 121px;
        height: 121px;
        border-radius: 5px;
        background: #E4E4E4;
    }

    #texte {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    #nom-permis {
        width: 104px;
        height: 14px;
        border-radius: 100px;
        background: #D9D9D9;
    }

    #age-permis {
        width: 50px;
        height: 10px;
        border-radius: 100px;
        background: #D9D9D9;
    }

    .description {
        width: 123px;
        height: 3px;
        background: #D9D9D9;
        border-radius: 100px;
    }

    #description-permis {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>
  