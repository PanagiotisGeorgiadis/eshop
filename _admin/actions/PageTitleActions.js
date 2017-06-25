export const UPDATE_PAGE_TITLE = "UPDATE/PAGE_TITLE";

export const updatePageTitle = (text) => ({

	type: UPDATE_PAGE_TITLE,
	payload: {
		containerData: {
			id: null,
			className: null
		},
		pageTitleData: {
			id: null,
			className: "text-center page_title",
			text
		}
	}
});