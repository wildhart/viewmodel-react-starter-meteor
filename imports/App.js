App({
    sub: Meteor.subscribe('teams'), 

	render() {
		<div>
	        This child is not conditionally rendered and will work:
		    <Child/>
		    <br />
	        This child IS conditionally rendered and will NOT work:
		    <Child b="if: sub.ready()"/>
		</div>
	}
});
