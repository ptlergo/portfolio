const router = express.Router();

router.route('/api/v1/works').get(res => {
    console.log('get all works');
    if (err)
        console.log(err)
    else                
        res.json('all works');
});

module.exports = router;