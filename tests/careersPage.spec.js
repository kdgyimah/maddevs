import {
  mount
} from '@vue/test-utils';
import CareersPage from '@/pages/careers';

describe('Careers page', () => {
  let wrapper;

  beforeEach(() => {
    global.$nuxt = {
      $route: {
        name: null
      }
    };
    wrapper = mount(CareersPage, {
      stubs: ['ValidationObserver', 'router-link']
    });
  });

  // ------ IMPORTANT ----- //
  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  test('Sets the correctly data', () => {
    expect(wrapper.vm.$data.title).toEqual('Mad Devs Careers');
    expect(wrapper.vm.$data.description).toEqual('');
    expect(wrapper.vm.$data.ogUrl).toEqual('https://maddevs.io/careers');
  });
});