/**
 * Users component - view
 */
users.view = function() {
  return m("ul#clients", [
    users.vm.list.users().map(function(user, i) {
      return m("li", { style:{ color:user.color() }}, [
        m("img", { class:'img-circle', src:user.avatar(), alt:user.name() }),
        user.name()
      ])
    })
  ])
};

/**
 * Component mounting
 */
m.mount(usersViewElement, { controller:users.controller, view:users.view });