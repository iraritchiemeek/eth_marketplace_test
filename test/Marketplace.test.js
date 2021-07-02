const Marketplace = artifacts.require('./Marketplace.sol');

contract('Marketplace', (accounts) => {
	let marketplace

	before(async () => {
		marketplace = await Marketplace.deployed()
	})

	describe('deployment', async () => {
		it('deploys succesfully', async () => {
			const address = await Marketplace.address
			assert.notEqual(address, '0x0')
			assert.notEqual(address, '')
			assert.notEqual(address, null)
			assert.notEqual(address, undefined)
		})

		it('has a name', async () => {
			const name = await marketplace.name()
			assert.equal(name, 'Test Marketplace')
		})
	})


})