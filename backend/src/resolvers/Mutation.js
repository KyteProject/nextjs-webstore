const Mutations = {
	async createItem( parent, args, ctx, info ) {
		const item = await ctx.db.mutation.createItem(
			{
				data: {
					...args
				}
			},
			info
		);

		return item;
	},

	async createCategory( parent, args, ctx, info ) {
		const category = await ctx.db.mutation.createCategory(
			{
				data: {
					...args
				}
			},
			info
		);

		return category;
	}
};

export default Mutations;
