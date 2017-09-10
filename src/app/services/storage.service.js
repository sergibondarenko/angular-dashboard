class Storage {

  constructor () {
    this.dashboards;
  }

  saveDashboards(dashboards) {
    this.dashboards = dashboards;
  }

  listDashboards() {
    return this.dashboards;
  }

}

export { Storage };
