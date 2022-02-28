import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import BlogPreview from './preview-templates/BlogPreview'
import FooterPreview from './preview-templates/FooterPreview'
import HeaderPreview from './preview-templates/HeaderPreview'

CMS.registerMediaLibrary(uploadcare)

CMS.registerPreviewTemplate('blogpost', BlogPostPreview)
CMS.registerPreviewTemplate('blog', BlogPreview)
CMS.registerPreviewTemplate('layoutheader', HeaderPreview)
CMS.registerPreviewTemplate('layoutfooter', FooterPreview)
