<template>
  <SidebarSection>
    <ul>
      <sidebar-nav-item label="Home" icon="home" is-active></sidebar-nav-item>
      <sidebar-nav-item label="Trending" icon="fire"></sidebar-nav-item>
      <sidebar-nav-item label="Subscriptions" icon="collection"></sidebar-nav-item>
    </ul>
  </SidebarSection>

  <SidebarSection>
    <ul>
      <sidebar-nav-item label="Library" icon="duplicate"></sidebar-nav-item>
      <sidebar-nav-item label="History" icon="clock"></sidebar-nav-item>
    </ul>
  </SidebarSection>

  <SidebarSection class="px-8 py-4 font-medium leading-5 border-b">
      <span class="text-sm">
        Sign in to like videos, comment, and subscribe.
      </span>
    <ButtonLogin
        class="focus:outline-none flex items-center px-2 py-0.5 mt-3 text-sm text-blue-700 uppercase border border-blue-700 rounded-sm"
    ></ButtonLogin>
  </SidebarSection>

  <SidebarSection>
    <SidebarSectionHeading title="Best of YouTube"/>
    <ul>
      <SidebarNavItem label="Music" icon="musicNote"/>
      <SidebarNavItem label="Sports" icon="speakerphone"/>
      <SidebarNavItem label="Gaming" icon="puzzle"/>
      <SidebarNavItem label="Movies" icon="film"/>
      <SidebarNavItem label="News" icon="newspaper"/>
      <SidebarNavItem label="Live" icon="statusOnline"/>
      <SidebarNavItem label="360&deg; Video" icon="eye"/>
    </ul>
  </SidebarSection>

  <SidebarSection>
    <ul>
      <SidebarNavItem label="Browse Channels" icon="plusCircle"/>
    </ul>
  </SidebarSection>

  <SidebarSection>
    <SidebarSectionHeading title="More from YouTube"/>
    <ul>
      <SidebarNavItem label="YouTube Premium" icon="play"/>
      <SidebarNavItem label="Live" icon="statusOnline"/>
    </ul>
  </SidebarSection>

  <SidebarSection>
    <ul>
      <SidebarNavItem label="Settings" icon="cog"/>
      <SidebarNavItem label="Report history" icon="flag"/>
      <SidebarNavItem label="Help" icon="questionMarkCircle"/>
      <SidebarNavItem label="Send feedback" icon="annotation"/>
    </ul>
  </SidebarSection>

  <SidebarSection class="px-6 py-4 text-xs font-semibold space-y-4">
    <TheFooter/>
  </SidebarSection>

</template>

<script>
import TheFooter from "./TheFooter/TheFooter.vue";
import SidebarSection from "./SidebarSection/SidebarSection.vue";
import SidebarSectionHeading from "./SidebarSectionHeading/SidebarSectionHeading.vue";
import SidebarNavItem from "./SidebarNavItem/SidebarNavItem.vue";
import ButtonLogin from "../../Common/ButtonLogin/ButtonLogin.vue";

export default {
  name: "SidebarContent",
  components: {TheFooter, SidebarSection, SidebarSectionHeading, SidebarNavItem, ButtonLogin}
}
</script>

<style scoped>

</style>