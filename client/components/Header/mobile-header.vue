<template>
  <div class="mobile-header" :class="{ 'is-open': mobileHeaderIsOpen }">
		<div class="mobile-header__top-line">
			<router-link to="/" class="mobile-header__header-logo" @click.native="mobileHeaderIsOpen = false">
				<img src="@/assets/img/common/logo.svg" alt="Logotype">
			</router-link>
			<div class="mobile-header__button-wrap">
				<button class="mobile-header__toogle-btn" @click="toggleMobileHeader()">
					<img src="@/assets/img/Header/mobile-header-hamburger.svg" alt="Open" class="mobile-header__open" v-if="!mobileHeaderIsOpen">
					<img src="@/assets/img/Header/mobile-header-close.svg" alt="Close" class="mobile-header__close" v-else>
				</button>
			</div>
		</div>
		<perfect-scrollbar class="mobile-header__scrollbar custom-scrollbar container">
			<div class="mobile-header__content-wrap" v-show="mobileHeaderIsOpen">
				<nav class="mobile-header__header-routes_links">
					<router-link exact to="/">About</router-link>
					<router-link to="/services">Services</router-link>
					<router-link to="/projects">Projects</router-link>
					<router-link to="/careers">Careers</router-link>
					<a href="https://blog.maddevs.io/" target="_blank" rel="noreferrer">Blog</a>
				</nav>
				<UIButtonModalTrigger 
					:buttonInnerText="buttonInnerText" 
					:isRed="true"
					:modalWindowName="modalWindowName"
					class="mobile-header__modal-trigger-btn" 
				/>
				<div class="mobile-header__contacts">
					<footerContacts />
				</div>
				<div class="mobile-header__social-network_links">
					<footerSocialNetworkBar />
				</div>
			</div>
		</perfect-scrollbar>
	</div>
</template>

<script>
import UIButtonModalTrigger from '@/components/ui/UIButtonModalTrigger';
import footerContacts from '@/components/Footer/footer-contacts';
import footerSocialNetworkBar from '@/components/Footer/footer-social-network';

export default {
  name: 'mobile-header',
  components: {
    UIButtonModalTrigger,
    footerContacts,
    footerSocialNetworkBar
  },
  data() {
    return {
      buttonInnerText: 'Contact me',
      mobileHeaderIsOpen: false,
      modalWindowName: 'contact-me-modal'
    };
  },
  watch: {
    '$route'() {
      this.mobileHeaderIsOpen = false;
      this.enableScrollOnBody();
    }
  },
  methods: {
    toggleMobileHeader() {
      this.mobileHeaderIsOpen = !this.mobileHeaderIsOpen;
      if(this.mobileHeaderIsOpen) {
        this.disableScrollOnBody();
      } else {
        this.enableScrollOnBody();
      }
    },
    enableScrollOnBody() {
      document.body.classList.remove('scrollDisabled');
    },
    disableScrollOnBody() {
      document.body.classList.add('scrollDisabled');
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

	.mobile-header {
    width: 100%;
		display: none;
    margin-top: -120px;

		&__modal-trigger-btn {
			width: 100%;
      height: 65px;
			font-family: 'Hoves-Bold';
			font-size: 27px;
      color: $text-color--red;
    	border-color: $border-color--red;
    }

		&__top-line {
			display: flex;
			justify-content: space-between;
			margin-bottom: 32px;
			padding: 22px 34px 0;
		}

		&__header-logo {
      width: 35px;
			height: 60px;
    }

    &__content-wrap {
			height: 100%;
		}

    &__header-routes_links {
			width: 100%;
			display: flex;
			flex-direction: column;
		}

		&__header-routes_links a {
			padding: 14px 0;
			font-size: 36px;
			font-family: 'Hoves-Bold';
			text-decoration: none;
			color: $text-color--white;
			border-bottom: 1px solid $border-color--grey;

			&:last-child {
				padding-bottom: 54px;
				border-bottom: 0;
			}
		}

		&__close,
		&__open {
			cursor: pointer;
		}

		&__social-network_links {
			padding: 32px 0;
			border-top: 1px solid $footer--border-color--grey-light;
		}

		&__contacts {
			padding-bottom: 22px;
		}

		.footer-contacts {
			padding-top: 41px;
		}

		&__toogle-btn {
			padding: 0;
			border: 0;
			box-shadow: none;
			background-color: transparent;
    }

		.nuxt-link-active {
			color: $text-color--red;

			&::after {
				color: $text-color--red;
			}
		}
  }

	.is-open {
		position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
		background: $bgcolor--black;

		.mobile-header__scrollbar {
			height: calc(100vh - 100px);
			overflow: auto;
		}
	}

  @media only screen and (max-width: 1024px) {
		.mobile-header {
			display: block;
			height: 100%;
			margin-top: 0;
      box-sizing: border-box;
		}
	}

	@media only screen and (max-width: 970px) {
		.mobile-header {
			&__top-line  {
				padding-left: 28px;
    		padding-right: 28px;
			}
		}
	}

	@media only screen and (max-width: 768px) {
		.mobile-header {
			&__top-line  {
    		padding-left: 18px;
    		padding-right: 18px;
			}
		}
	}

	@media only screen and (max-width: 440px) {
		.mobile-header {
			&__top-line {
				padding-left: 16px;
    		padding-right: 16px;
			}
		}
	}

	@media only screen and (max-width: 360px) {
		.mobile-header {
			&__header-routes_links {
				padding-top: 20px;

				a {
					padding: 10px 0;
					font-size: 29px;

					&:last-child {
						padding-bottom: 25px;
					}
				}
			}
		}
	}
</style>