$(document).ready(function() {
	$("#playlist").youtube_video({
		playlist: false,
		channel: 'UCuIIEM1MyZ_K6IZg2E2KYtA',
		user: false,
		videos: false,
		max_results: 5,
		pagination: true,
		continuous: true,
		first_video: 1,
		show_playlist: 'auto',
		playlist_type: 'horizontal',
		show_channel_in_playlist:true,
		show_channel_in_title: true,
		width: false,
		show_annotations: false,
		now_playing_text: 'Lecture en cours',
		load_more_text: 'Afficher plus',
		autoplay: false,
		force_hd: false,
		hide_youtube_logo: false,
		play_control: true,
		time_indicator: 'full',
		volume_control: true,
		share_control: true,
		fwd_bck_control: true,
		youtube_link_control: true,
		fullscreen_control: true,
		playlist_toggle_control:true,
		volume: true,
		show_controls_on_load: true,
		show_controls_on_pause: true,
		show_controls_on_play: false,
		player_vars: {},
		colors: {
			'controls_bg': 'rgba(20,173,164,.9)'
		},
	});
	$("#playlist-vertical").youtube_video({
		playlist: "PLOTXHFDhX9xowz7_6ElhhQ3OfYUQxbpcl",
		channel: 'PLOTXHFDhX9xowz7_6ElhhQ3OfYUQxbpcl',
		user: false,
		videos: false,
		max_results: 5,
		pagination: true,
		continuous: true,
		first_video: 0,
		show_playlist: 'auto',
		playlist_type: 'vertical',
		show_channel_in_playlist:true,
		show_channel_in_title: true,
		width: false,
		show_annotations: false,
		now_playing_text: 'Lecture en cours',
		load_more_text: 'Afficher plus',
		autoplay: false,
		force_hd: false,
		hide_youtube_logo: false,
		play_control: true,
		time_indicator: 'full',
		volume_control: true,
		share_control: true,
		fwd_bck_control: true,
		youtube_link_control: true,
		fullscreen_control: true,
		playlist_toggle_control:true,
		volume: true,
		show_controls_on_load: true,
		show_controls_on_pause: true,
		show_controls_on_play: false,
		player_vars: {},
		colors: {
			'controls_bg': 'rgba(20,173,164,.9)'
		},
	});

});