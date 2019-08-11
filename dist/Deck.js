"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Card_1 = require("./Card");
const misc_1 = require("./misc");
const validSuites = ["hearts", "spades", "diamonds", "clubs"];
const validRanks40 = ["2", "3", "4", "5", "6", "7", "J", "Q", "K", "A"];
const validRanks52 = ["2", "3", "4", "5", "6", "7", , "8", "9", "10", "J", "Q", "K", "A"];
class DeckOfCards {
    constructor(numberOfCards) {
        this.numberOfCards = numberOfCards;
        this.deck = [];
        this.numberOfCards = numberOfCards;
        this.buildDeck();
    }
    buildDeck() {
        const validRanks = this.numberOfCards == 40 ? validRanks40 : validRanks52;
        validSuites.forEach(suite => {
            validRanks.forEach(rank => {
                this.deck.push(new Card_1.Card(rank, suite));
            });
        });
    }
    drawCard() {
        if (this.deck.length == 0) {
            console.log("The Deck of Cards is empty. Can not draw card.");
            return 0;
        }
        return this.deck.pop();
    }
    shuffleDeck(times = 1) {
        for (var i = 1; i <= times; i += 1) {
            misc_1.shuffleArray(this.deck);
        }
    }
}
exports.DeckOfCards = DeckOfCards;
