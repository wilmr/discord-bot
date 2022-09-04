const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('embed')
		.setDescription('Returns an embed'),
	async execute(interaction, client) {
		const embed = new EmbedBuilder()
			.setTitle('Justin is being weird in Vacaville')
			.setDescription('People have been talking...')
			.setColor(0x18e1ee)
			.setImage(client.user.displayAvatarURL())
			.setThumbnail(client.user.displayAvatarURL())
			.setTimestamp(Date.now())
			.setAuthor({
				url: `https://youtube.com/c/froggychair`,
				iconURL: interaction.user.displayAvatarURL(),
				name: interaction.user.tag,
			})
			.setFooter({
				iconURL: client.user.displayAvatarURL(),
				text: client.user.tag,
			})
			.setURL(`https://github.com/wilmr/discord-bot`)
			.addFields([
				{
					name: `Field 1`,
					value: `Field value 1`,
					inline: true,
				},
				{
					name: `Field 2`,
					value: `Field value 2`,
					inline: true,
				},
			]);

		await interaction.reply({
			embeds: [embed],
		});
	},
};
