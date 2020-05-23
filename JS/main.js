'use strict';

$(document).ready(function () {
    const playList = [
        {
            author: "LED ZEPPELIN",
            song: "STAIRWAY TO HEAVEN"
        }, {
            author: "QUEEN",
            song: "BOHEMIAN RHAPSODY"
        }, {
            author: "LYNYRD SKYNYRD",
            song: "FREE BIRD"
        }, {
            author: "DEEP PURPLE",
            song: "SMOKE ON THE WATER"
        }, {
            author: "JIMI HENDRIX",
            song: "ALL ALONG THE WATCHTOWER"
        }, {
            author: "AC/DC",
            song: "BACK IN BLACK"
        }, {
            author: "QUEEN",
            song: "WE WILL ROCK YOU"
        }, {
            author: "METALLICA",
            song: "ENTER SANDMAN"
        }];

    $('body').append('<h1>Choose track</h1><ol class="songList"></ol>')
    renderList(playList)

    function renderList(playList) {
        for (let item of playList) {
            let $item = $(`<li class="songList-item"><span>${item.author} -- ${item.song}</span>  
            <button class="openModal">Listen track</button></li>`)
            $('.songList').append($item)
            let $openModal = $item.find('.openModal')
            $openModal.click(function() {
                openModal(item.author, item.song, $item)
            })
        }
    }

    function openModal(author, song, item) {
        $('body').append('<div class="modal"></div>')
        $('.modal')
            .append(`${author} -- ${song}</br>`)
            .append('<button class="closeModal">Show full</button>')
        $('.closeModal').click(function() {closeModal(item)})
    }

    function closeModal(item) {
        $('.modal').remove()
        item.append('<hr/>')
    }
})