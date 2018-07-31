<template>
  <section class='container'>
    <div class="col-md-12 text-left component">
      <div class="col-lg-6">
        <h3>Stack: {{stack}}<br>Wager: {{wager}}</h3>
        <h1>Your number: {{randNum}}<br><br>{{game}}</h1>
        <h3>Wins: {{wins}}<br>Losses: {{losses}}</h3>
        <div class="form">
          <div class="text-right form-group" id="odds">
            <h3>Odds:</h3>
            <input class="form-control-sm text-muted" type="number" v-model="odds">
            <h5>(percentage)</h5>
          </div>
          <div class="form-group">
            <h1>Base Wager:</h1>
            <input class="form-control" type="number" v-model="baseWager">
          </div>
          <div class="form-group">
            <h1>Stack:</h1>
            <input class="form-control" type="number" v-model="stack">
          </div>
          <div class="form-group">
            <h1>Rolls:</h1>
            <input class="form-control" type="number" v-model="rolls">
          </div>
          <div class="text-center">
            <label class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" v-model="martingale">
              <span class="custom-control-indicator"></span>
              <span class="custom-control-description">Martingale</span>
            </label>
            <br>
            <button class="btn btn-primary btn-lg" @click="roll()"><b>Roll!</b></button>
            <h1>{{bust}}</h1>
          </div>
        </div>
      </div>
      <div class="col-lg-6 visible-lg">
        <p class="giant text-center vertical-center">{{randNum}}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      randNum: null,
      game: '',
      win: null,
      wager: 10,
      baseWager: 10,
      stack: 100,
      rolls: 1,
      odds: 50,
      wins: 0,
      losses: 0,
      bust: '',
      martingale: false
    }
  },
  methods: {
    loseBet(){
      this.game = 'You lose.'
      this.win = false
      this.stack = parseInt(this.stack) - parseInt(this.wager)
      this.losses++
      if (this.martingale) { this.wager *= 2 }
    },
    winBet(){
      this.game = 'You win!'
      this.win = true
      this.stack = parseInt(this.stack) + parseInt(this.wager)
      this.wins++
      if (this.martingale) { this.wager = this.baseWager }
    },
    roll() {

      this.bust = ''
      this.wager = parseInt(this.baseWager)

      for(this.i = 0; this.i < this.rolls; this.i++) {
        this.randNum = Math.floor(Math.random() * 100) + 1

        if (this.randNum <= this.odds) {
          this.winBet()
        } else {
          this.loseBet()
        }

        if (this.stack < 1) {
          this.bust = 'Busted!'
          this.wager = this.baseWager
          return
        }
        console.log(`Roll: ${this.i}, ${this.win}, ${this.wager}`)
      }
      this.wager = parseInt(this.baseWager)
    }
  },
  watch: {
    wager(){
      if (this.wager > this.stack) {
        this.wager == 0
      }
    }
  }
}
</script>
<style>
  .container .text-left{
  	background: none;
    font-family: 'Avenir', Helvetica;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #32a888;
    color: #f2f6fc;
    padding-top: 1px;
    margin-bottom: 0px;
  }
</style>
