export default function handler(req, res) {
    // ....
    res.setPreviewData({})
    // ...

    //res.redirect()
    res.end('Preview mode enabled')
}