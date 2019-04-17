<template>
	<div class="about">
		<v-layout wrap>
			<v-navigation-drawer v-model="drawer"
			                     absolute
			                     temporary
			>
				<v-list class="pa-1">
					<v-list-tile avatar>
						<v-list-tile-avatar>
							<img src="https://randomuser.me/api/portraits/men/85.jpg">
						</v-list-tile-avatar>
						<v-list-tile-content>
							<v-list-tile-title>John Leider</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list>
				<v-list class="pt-0"
				        dense
				>
					<v-divider></v-divider>
					<v-list-tile v-for="item in items"
					             :key="item.title"
					             @click=""
					>
						<v-list-tile-action>
							<v-icon>{{ item.icon }}</v-icon>
						</v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>{{ item.title }}</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list>
			</v-navigation-drawer>
		</v-layout>
		<div id="lateral">
			<v-toolbar dark
			           tabs
			           flat
			           color="indigo"
			>
				<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
				<v-toolbar-title>Page title</v-toolbar-title>
				<v-spacer></v-spacer>
				<v-btn icon>
					<v-icon>search</v-icon>
				</v-btn>
				<v-btn icon>
					<v-icon>more_vert</v-icon>
				</v-btn>
				<template v-slot:extension>
					<v-tabs v-model="tabs"
					        align-with-title
					        color="transparent"
					>
						<v-tab href="#one">Item One</v-tab>
						<v-tab href="#two">Item Two</v-tab>
						<v-tab href="#three">Item Three</v-tab>
						<v-tabs-slider color="pink"></v-tabs-slider>
					</v-tabs>
				</template>
			</v-toolbar>
			<v-tabs-items v-model="tabs">
				<v-tab-item v-for="content in ['one', 'two', 'three']"
				            :key="content"
				            :value="content"
				>
					<v-card height="200px"
					        flat
					></v-card>
				</v-tab-item>
			</v-tabs-items>
			<v-fab-transition>
				<v-btn :key="activeFab.icon"
				       v-model="fab"
				       :color="activeFab.color"
				       dark
				       fab
				       fixed
				       bottom
				       left
				>
					<v-icon>{{ activeFab.icon }}</v-icon>
					<v-icon>close</v-icon>
				</v-btn>
			</v-fab-transition>
		</div>
		<div class="text-xs-center">
			<v-dialog v-model="dialog"
			          width="500"
			>
				<template v-slot:activator="{ on }">
					<v-btn color="red lighten-2"
					       dark
					       v-on="on"
					>
						Click Me
					</v-btn>
				</template>
				<v-card>
					<v-card-title class="headline grey lighten-2"
					              primary-title
					>
						Privacy Policy
					</v-card-title>
					<v-card-text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</v-card-text>
					<v-divider></v-divider>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="primary"
						       flat
						       @click="dialog = false"
						>
							I accept
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
		</div>
		<v-expansion-panel dark
		                   :expand="true"
		>
			<v-expansion-panel-content v-for="(item,i) in 5"
			                           :key="i"
			>
				<template v-slot:header>
					<div>Item</div>
				</template>
				<v-card>
					<v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
					             exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</v-card-text>
				</v-card>
			</v-expansion-panel-content>
		</v-expansion-panel>
	</div>
</template>
<script>
	export default {
		data: () => ({
			drawer: null,
			items:  [
				{ title:  'Home',
					icon: 'dashboard'
				},
				{ title:  'About',
					icon: 'question_answer'
				}
			],
			fab:    false,
			hidden: false,
			tabs:   null,
			dialog: false,
		}),

		computed: {
			activeFab()
			{
				switch (this.tabs)
				{
					case 'one':
						return {
							'color': 'indigo',
							icon:    'share'
						};
					case 'two':
						return {
							'color': 'red',
							icon:    'edit'
						};
					case 'three':
						return {
							'color': 'green',
							icon:    'keyboard_arrow_up'
						};
					default:
						return {}
				}
			}
		}
	}
</script>
<style>
	/* This is for documentation purposes and will not be needed in your application */
	#lateral .v-speed-dial,
	#lateral .v-btn--floating {
		position : absolute;
	}

	#lateral .v-btn--floating {
		margin : 0 0 16px 16px;
	}
</style>
