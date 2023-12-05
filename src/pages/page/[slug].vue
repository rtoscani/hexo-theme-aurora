<template>
  <div class="mt-20">
    <Breadcrumbs :current="pageTitle" />
    <PageContent :post="pageData" :title="pageTitle">
      <template v-if="enabledComment">
        <div id="comments">
          <Comment
            :title="pageData.title"
            :body="pageData.text"
            :uid="pageData.uid"
          />
        </div>
      </template>
    </PageContent>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, ref, watch } from 'vue'
import { useArticleStore } from '@/stores/article'
import { Page } from '@/models/Article.class'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { useMetaStore } from '@/stores/meta'
import PageContent from '@/components/PageContent.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import Comment from '@/components/Comment.vue'
import useCommentPlugin from '@/hooks/useCommentPlugin'
import { Locales, Menu } from '@/models/ThemeConfig.class'

export default defineComponent({
  name: 'ARPage',
  components: { PageContent, Breadcrumbs, Comment },
  setup() {
    const articleStore = useArticleStore()
    const appStore = useAppStore()
    const metaStore = useMetaStore()
    const pageData = ref(new Page())
    const route = useRoute()
    const { t } = useI18n()
    const pageTitle = ref()
    const { enabledCommentPlugin } = useCommentPlugin()

    const fetchArticle = async () => {
      const response = await articleStore.fetchArticle(
        String(route.params.slug)
      )

      pageData.value = response
      pageTitle.value = response.title
      updateTitle(appStore.locale)
    }

    const updateTitle = (locale?: Locales) => {
      const currentLocale = locale ?? 'en'

      let routeInfo: Menu | undefined =
        appStore.themeConfig.menu.menus[String(route.params.slug)];

        if (!routeInfo) {
            for (const [key, menu] of Object.entries(appStore.themeConfig.menu.menus)) {
                routeInfo = menu.children.find(c => c.key == route.params.slug)
                if (routeInfo) {
                    break
                }
            }
        }

      pageTitle.value =
        (routeInfo?.i18n && routeInfo.i18n[currentLocale]) || routeInfo?.name
      metaStore.setTitle(pageTitle.value)
    }

    watch(
      () => route.params,
      toParams => {
        if (toParams.slug && route.fullPath.indexOf('#') === -1) fetchArticle()
      }
    )

    onBeforeMount(fetchArticle)

    return {
      enabledComment: computed(
        () =>
          pageData.value.comments && enabledCommentPlugin.value.plugin !== ''
      ),
      pageTitle: computed(() => pageTitle.value),
      pageData,
      t
    }
  }
})
</script>

<style lang="scss" scoped></style>
