function verificar() {
    github = document.getElementById('txt-github')
    slack = document.getElementById('txt-slack')
    git = document.getElementById('txt-git')
    result = document.getElementById('txt-result')

    total = 0
    ticketGitHub = numero(github.value)
    ticketSlack = numero(slack.value)
    ticketGit = numero(git.value)

    total = ticketGitHub + ticketSlack + ticketGit

    console.info('ticketGitHub: ', ticketGitHub)
    console.info('ticketSlack: ', ticketSlack)
    console.info('ticketGit: ', ticketGit)
    console.info('total: ', total)

    if (total > 10) {
        result.innerHTML = ' llevas demasiados stickers'
    } else {
        result.innerHTML = 'llevas ' + total + " ticket(s)."
    }

}

function numero(value) {
    try {
        num = parseInt(value)
        if (isNaN(num)) {
            return 0
        } else {
            return num
        }
    } catch (error) {
        return 0
    }
}