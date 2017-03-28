document.querySelector('[data-emoji]').textContent = (
    function(emojis) {
        return emojis[Math.floor(Math.random() * emojis.length)];
    }
)(['💪', '❤️', '👏', '🙏', '🔥', '🤘', '👍', '🚀']);

var links = document.querySelectorAll('.link-primary');

for (var i = 0; i < links.length; i++) {
    var link = links[i];
    var b = baffle(link, {
        characters: '█',
        speed: 60
    });

    link.addEventListener('mouseenter', function() { this.start(); }.bind(b));
    link.addEventListener('mouseleave', function() { this.reveal(1000); }.bind(b));
}
