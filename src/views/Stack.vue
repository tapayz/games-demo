<template>
  <v-container id="stack" tag="section">
    <Card
      class="mx-auto pa-12"
      color="primary"
      max-width="90%"
      theme="dark"
      width="900"
    >
      <Subheading subtitle="Competitor analysis" title="How We Stack Up" />
    </Card>

    <Card class="mt-n4 mx-auto pa-6" max-width="1100">
      <v-table>
        <thead>
          <tr>
            <th />
            <template v-for="(logo, i) in logos">
              <th v-if="i < 3 || mdAndUp" :key="logo">
                <v-avatar color="transparent" size="40" elevan>
                  <v-img :cover="false" :src="logo" />
                </v-avatar>
              </th>
            </template>
          </tr>

          <tr>
            <th>Features</th>
            <th>Tapayz</th>
            <th>Bitcoin</th>
            <th>Ethereum</th>
            <template v-if="mdAndUp">
              <th>Litecoin</th>
              <th>Dash</th>
            </template>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              Wallet recovery via<br />
              seed phrase
            </td>
            <td><Check /></td>
            <td><Check /></td>
            <td><Check /></td>
            <template v-if="mdAndUp">
              <td><Check /></td>
              <td><Check /></td>
            </template>
          </tr>

          <tr>
            <td>Web3 connectivity</td>
            <td><Check /></td>
            <td><Check /></td>
            <td><Check /></td>
            <template v-if="mdAndUp">
              <td />
              <td />
            </template>
          </tr>

          <tr>
            <td>
              Credit card purchasing<br />
              of ETH
            </td>
            <td><Check /></td>
            <td><Check /></td>
            <td />
            <template v-if="mdAndUp">
              <td><Check /></td>
              <td><Check /></td>
            </template>
          </tr>

          <tr>
            <td>
              View and export<br />
              private keys from<br />
              within wallet
            </td>
            <td><Check /></td>
            <td><Check /></td>
            <td />
            <template v-if="mdAndUp">
              <td />
              <td />
            </template>
          </tr>

          <tr>
            <td>DAPP and DEX store</td>
            <td><Check /></td>
            <td />
            <td><Check /></td>
            <template v-if="mdAndUp">
              <td />
              <td />
            </template>
          </tr>

          <tr>
            <td>
              Automatically update<br />
              new tokens to your<br />
              portfolio
            </td>
            <td><Check /></td>
            <td />
            <td />
            <template v-if="mdAndUp">
              <td />
              <td><Check /></td>
            </template>
          </tr>

          <tr>
            <td>
              Send all ERC-20 tokens<br />
              without the use of 3rd<br />
              party websites
            </td>
            <td><Check /></td>
            <td />
            <td />
            <template v-if="mdAndUp">
              <td />
              <td />
            </template>
          </tr>
          <tr />
        </tbody>

        <tfoot class="hidden-sm-and-down">
          <tr>
            <th class="text-h5 font-weight-bold py-6">Market Cap.</th>
            <td>
              <Btn color="primary" elevation="0" alt> $584K </Btn>
            </td>
            <td />
            <td />
            <td>
              <Btn color="primary" elevation="0" alt> $20M </Btn>
            </td>
            <td>
              <Btn color="primary" elevation="0" alt> $25M </Btn>
            </td>
          </tr>
        </tfoot>
      </v-table>
    </Card>
  </v-container>
</template>

<script setup lang="ts">
const { mdAndUp } = useDisplay();

const logos = [
  "/assets/logo-dark.png",
  "/assets/competitors/bitcoin.png",
  "/assets/competitors/ethereum.png",
  "/assets/competitors/litecoin.png",
  "/assets/competitors/dash.png",
];
</script>

<style lang="sass">
#stack
  th, td
    text-align: center
    font-size: 1rem

    &:first-child
      text-align: left

  th
    color: rgba(0, 0, 0, .7)
    font-weight: 900

  td
    color: rgba(0, 0, 0, .5)
    font-weight: 500
</style>
