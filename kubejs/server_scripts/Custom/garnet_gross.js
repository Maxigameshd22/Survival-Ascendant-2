ItemEvents.rightClicked(event => {
    if (event.item.id === 'kubejs:garnet_gross') { 
        event.player.tell('Gameplay Overload!') 
        setTimeout(() => {
            event.player.tell('Uhh, that wasnt supposed to happen.') 
        }, 2000);
        setTimeout(() => {
            event.player.tell('Well I guess kicking someone out of the Game is the Strongest ability you can have, even though you can only kick yourself') 
        }, 4000);
        setTimeout(() => {
            event.player.tell('See ya in Survival Ascendant 3! ;D') 
            
        }, 10000);
        setTimeout(() => {
            Client.stop();
        }, 12000);
        
       
    }
});